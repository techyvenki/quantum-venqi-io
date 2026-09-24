---
layout: learning
title: Learning Component Gallery
permalink: /component-gallery/
kicker: AUTHORING KIT
subtitle: Preview reusable visual components and copy include snippets while creating new lessons.
topic: AUTHORING
reading_time: 6 MIN
next_page: /quantum-basics/
next_label: QUANTUM BASICS
---

Use this page as a live preview board for all reusable learning components.

<div class="learning-callout">
  <strong>How to use:</strong> copy an include snippet into any page that uses the learning layout.
</div>

## Qubit Measurement Simulation

{% include learning-components/qubit-measurement.html %}

```liquid
{% raw %}{% include learning-components/qubit-measurement.html %}{% endraw %}
```

## Animated Bloch Sphere Diagram

{% include learning-components/bloch-sphere.html %}

```liquid
{% raw %}{% include learning-components/bloch-sphere.html %}{% endraw %}
```

## Vector Transform Animation

{% include learning-components/vector-transform.html %}

```liquid
{% raw %}{% include learning-components/vector-transform.html %}{% endraw %}
```

## Tensor Product Mapping

{% include learning-components/tensor-map.html %}

```liquid
{% raw %}{% include learning-components/tensor-map.html %}{% endraw %}
```

## Recommended Authoring Pattern

1. Start each lesson with a visual intro card grid.
2. Add one interactive block after each major concept.
3. Close with a practical exercise and one next-page link.
