# introduction
This is introduction to Temporal

## What is Temporal
Temporal is a workflow management system similar to Argo workflows or Step Functions. Temporal is a way to create pipelines that takes care of the things "around".

## Most important properties
 durable long running workflows - no limit for how long workflow can run

 UI - We can manage workflows from web UI

 Restart from any point - We can always restart worfklows, this is usefull after bugfixing, retries of failed ML activities...

 Automatic retries - We just tell the temproal how the activity should behave

 We can change workflow during runtime (with limitations)


# Basics
To get us some vocabulary

## Workflow
Code that describe how the pipeline works

## Activity
The business logic unit

## Worker
Where activities are run

## Temporal
Controll plane that makes the workflow possible

## How does all this connects?
We write worfklow, the Temporal controll plane runs it and saves all inputs/Outputs to DB. This allow temporal to later replay the steps the workflow took. Individual activities are then run inside workers which are simply K8S pods inside our cluster.

# Limitations

## 2mb limit I/O
All activities input/outputs are saved in DB, that is why there is a 2mb limit for activity input/output size.

## determinism
Doing changes to workflows can be a bit painfull. Because the temporal need to be able to determine how to replay the workflow, we cannot do breaking changes to the workflow. There is a way to do this - [patches](https://github.com/parrot-com/parrot/blob/5cc281d257ead35d6a4f284d855911a247ef06cd/backend/parrot/pipelines/medical_summary/merge_medical_records_workflow.py#L271). Without patching workflows we get non-deterministi-error that unfortunately does not terminate workflow so the workflow still seems to be "running" but it is in an error state...

## Workflow should just run activities
Each function call need to resolve within 2 seconds or we receive a warning about possible stuck workflow. This mean that all thinkgs that might take longer need to be done inside activity (any LLM calls, any S3 downloads, any loops...)

# Learned along the way

## Not failing activities
Inifinite retries, timed out workflows. In this setup we can fix issues and the workflows resume with next retry

## Always have fallback!
1% of failing when you have 1K workflows/day is still a lot of workflows to restart

## Issues monitoring
we are still learning there

## Running child workflows
1. Do not fail parent workflows
2. Use [this](https://github.com/parrot-com/parrot/blob/debba7d1d9fab463e11f65b9b4811fce07607df3/backend/parrot/pipelines/helpers.py#L325)
