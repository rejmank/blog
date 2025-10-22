# introduction
This is introduction to Temporal

## What is Temporal

## Most important properties
- UI
- Restart from any point
- Any wait time
- Automatic retries

# Basics
Temporal is a way to create pipelines that takes care of the things "around"

## Workflow
Code that describe how the pipeline works

## Activity
The business logic unit

## Worker
When activities are run

## Temporal
where the magic happens

# Limitations

## 2mb limit I/O
All activities input/outputs are saved in DB

## determinism
Doing changes to workflows can be a bit painfull

## Workflow should just run activities
or you get non determinism error = pain

# Learned along the way

## Not failing activities
Inifinite retries, timed out workflows

## Issues monitoring
we are still learning there

## Running child workflows
1. Do not fail parent workflows
2. Use [this](https://github.com/parrot-com/parrot/blob/debba7d1d9fab463e11f65b9b4811fce07607df3/backend/parrot/pipelines/helpers.py#L325)
