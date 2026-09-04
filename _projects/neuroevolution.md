---
layout: page
title: Neuroevolution
description: Evolving Artificial Neural Networks (ANN) with Genetic Algorithms using PyTorch and PyMOO.
importance: 1
category: machine-learning
github: https://github.com/carloshkayser/neuroevolution
---

A modular Python framework implementing Artificial Neural Networks (ANN) trained using Genetic Algorithms (GA via [PyMOO](https://pymoo.org/)) to solve OpenAI Gymnasium control and navigation environments without traditional gradient-based backpropagation.

## Solution Demos

<div class="row mt-3">
    <div class="col-sm-6 mt-3 mt-md-0">
        <div class="card h-100 shadow-sm">
            <img src="https://raw.githubusercontent.com/carloshkayser/neuroevolution/master/assets/cartpole.gif" class="card-img-top" alt="CartPole Demo" loading="lazy">
            <div class="card-body">
                <h5 class="card-title">CartPole (<code>CartPole-v1</code>)</h5>
                <p class="card-text text-muted">Pole balancing control with continuous action adjustments.</p>
            </div>
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <div class="card h-100 shadow-sm">
            <img src="https://raw.githubusercontent.com/carloshkayser/neuroevolution/master/assets/mountaincar.gif" class="card-img-top" alt="MountainCar Demo" loading="lazy">
            <div class="card-body">
                <h5 class="card-title">MountainCar (<code>MountainCar-v0</code>)</h5>
                <p class="card-text text-muted">Building momentum back and forth to climb a steep hill.</p>
            </div>
        </div>
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm-6 mt-3 mt-md-0">
        <div class="card h-100 shadow-sm">
            <img src="https://raw.githubusercontent.com/carloshkayser/neuroevolution/master/assets/maze.gif" class="card-img-top" alt="Maze Demo" loading="lazy">
            <div class="card-body">
                <h5 class="card-title">Maze (<code>HardMaze-v0</code>)</h5>
                <p class="card-text text-muted">Complex robot navigation through a maze to reach the goal.</p>
            </div>
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <div class="card h-100 shadow-sm">
            <img src="https://raw.githubusercontent.com/carloshkayser/neuroevolution/master/assets/carracing.gif" class="card-img-top" alt="CarRacing Demo" loading="lazy">
            <div class="card-body">
                <h5 class="card-title">CarRacing (<code>CarRacing-v3</code>)</h5>
                <p class="card-text text-muted">Full lap track completion and steering control (Reward 900+).</p>
            </div>
        </div>
    </div>
</div>

---

## Key Features

- **Gradient-Free Optimization**: Evolves PyTorch neural network weights using genetic operators (selection, crossover, mutation) from PyMOO.
- **Gymnasium Benchmarks**: Out-of-the-box support for:
  - **CartPole** (`CartPole-v1`) - Balance a pole on a moving cart
  - **MountainCar** (`MountainCar-v0`) - Build momentum to drive up a steep hill
  - **Maze** (`HardMaze-v0`) - Complex robot maze navigation
  - **CarRacing** (`CarRacing-v3`) - Race around procedurally generated tracks
- **High Performance**: Multi-core parallel fitness evaluation across CPU cores using `multiprocessing`.
- **Checkpointing & Warm Start**: Ability to save, resume, and fine-tune evolutionary runs.
- **Evaluation & Demo Recording**: Built-in utilities to evaluate and record animated GIFs of trained policies.

---

## Installation

```bash
# Clone the repository
git clone https://github.com/carloshkayser/neuroevolution.git
cd Neuroevolution

# Install dependencies using Poetry
poetry install

# Or install via pip
pip install -e .
```

---

## Quickstart

### Command Line Interface

```bash
# Train on CartPole
neuroevolution --train --env CartPole

# Train on CarRacing in parallel across 8 CPU cores
neuroevolution --train --env CarRacing --generations 35 --population 50 --n-workers 8

# Evaluate trained model
neuroevolution --test --env CarRacing
```

### Python API

```python
from neuroevolution import PyTorchGeneticTrainer

# Create trainer
trainer = PyTorchGeneticTrainer(
    env_name="MountainCar-v0",
    network_architecture=[16, 8],
    model_prefix="mountaincar_ga",
)

# Train with Genetic Algorithm
best_network, best_fitness, generations = trainer.train(
    n_generations=50,
    population_size=40,
    crossover_prob=0.9,
    mutation_prob=0.1,
)

# Evaluate the trained policy
avg_reward, std_reward = trainer.evaluate(n_episodes=10)
print(f"Average Reward: {avg_reward:.2f} +/- {std_reward:.2f}")
```

<div class="d-flex justify-content-center mt-4">
  <a href="https://github.com/carloshkayser/neuroevolution" class="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-github"></i> View on GitHub
  </a>
</div>
