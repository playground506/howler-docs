// File: guides/getting-started.md
---
id: getting-started
title: Getting Started with Howler
sidebar_label: Getting Started
---

# Getting Started with Howler

This guide will walk you through the basics of setting up and using Howler in your projects.

## Installation

You can install Howler using npm or yarn:

```bash
# Using npm
npm install howler

# Using yarn
yarn add howler
```

## Basic Configuration

After installation, you'll need to configure Howler for your project:

```javascript
// Import Howler
import { Howl } from 'howler';

// Create a new Howl instance
const sound = new Howl({
  src: ['path/to/sound.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.5,
});

// Play the sound
sound.play();
```

## Core Concepts

### Sound Objects

In Howler, everything revolves around sound objects. A sound object represents an audio file that can be played, paused, and manipulated.

### Events

Howler provides events that allow you to respond to changes in your audio:

```javascript
sound.on('play', function() {
  console.log('Sound started playing!');
});

sound.on('end', function() {
  console.log('Sound finished playing!');
});
```

### Control Methods

You have full control over your sounds with methods like:

- `play()`: Start playing the sound
- `pause()`: Pause the currently playing sound
- `stop()`: Stop the sound completely
- `fade(from, to, duration)`: Fade the volume from one value to another

## Next Steps

Now that you understand the basics of Howler, you might want to explore:

- How to create a sound sprite
- Managing multiple sounds
- Advanced audio manipulation techniques
- Performance optimization

Check out the Advanced Usage guide for more detailed information on these topics.