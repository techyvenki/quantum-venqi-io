(function () {
  function initReveal() {
    var blocks = document.querySelectorAll('.hero, .content h2, .content h3, .content p, .content ul, .content ol, .content pre, .content .viz-grid, .panel, .interactive-box');
    for (var i = 0; i < blocks.length; i++) {
      if (!blocks[i].classList.contains('reveal')) {
        blocks[i].classList.add('reveal');
      }
    }

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      for (var j = 0; j < blocks.length; j++) {
        blocks[j].classList.add('show');
      }
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });

    for (var k = 0; k < blocks.length; k++) {
      io.observe(blocks[k]);
    }
  }

  function initQubitMeasurement() {
    var cards = document.querySelectorAll('[data-component="qubit-measurement"]');
    cards.forEach(function (card) {
      var slider = card.querySelector('[data-role="theta-slider"]');
      var thetaValue = card.querySelector('[data-role="theta-value"]');
      var p0Bar = card.querySelector('[data-role="p0-bar"]');
      var p1Bar = card.querySelector('[data-role="p1-bar"]');
      var p0Text = card.querySelector('[data-role="p0-text"]');
      var p1Text = card.querySelector('[data-role="p1-text"]');

      function update() {
        var theta = Number(slider.value);
        var rad = (theta * Math.PI) / 180;
        var p0 = Math.pow(Math.cos(rad / 2), 2);
        var p1 = Math.pow(Math.sin(rad / 2), 2);

        thetaValue.textContent = 'theta = ' + theta + ' degrees';
        p0Bar.style.width = (p0 * 100).toFixed(1) + '%';
        p1Bar.style.width = (p1 * 100).toFixed(1) + '%';
        p0Text.textContent = p0.toFixed(3);
        p1Text.textContent = p1.toFixed(3);
      }

      slider.addEventListener('input', update);
      update();
    });
  }

  function initBlochSphere() {
    var cards = document.querySelectorAll('[data-component="bloch-sphere"]');
    cards.forEach(function (card) {
      var line = card.querySelector('[data-role="bloch-vector"]');
      var tip = card.querySelector('[data-role="bloch-tip"]');
      var cx = 210;
      var cy = 135;
      var r = 95;
      var t = 0;

      function frame() {
        t += 0.015;
        var theta = Math.PI / 2 + Math.sin(t) * 0.65;
        var phi = t * 1.6;
        var x = cx + Math.cos(phi) * Math.sin(theta) * r;
        var y = cy - Math.cos(theta) * r;
        line.setAttribute('x2', x.toFixed(2));
        line.setAttribute('y2', y.toFixed(2));
        tip.setAttribute('cx', x.toFixed(2));
        tip.setAttribute('cy', y.toFixed(2));
        requestAnimationFrame(frame);
      }

      if (!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
        requestAnimationFrame(frame);
      }
    });
  }

  function initVectorTransform() {
    var cards = document.querySelectorAll('[data-component="vector-transform"]');
    cards.forEach(function (card) {
      var line = card.querySelector('[data-role="vec-transformed"]');
      var tip = card.querySelector('[data-role="vec-tip"]');
      var readout = card.querySelector('[data-role="matrix-readout"]');
      var buttons = card.querySelectorAll('[data-matrix]');

      var ox = 180;
      var oy = 130;
      var scale = 80;
      var v = { x: 0.9, y: 0.7 };
      var current = { x: v.x, y: v.y };

      function draw() {
        var x = ox + current.x * scale;
        var y = oy - current.y * scale;
        line.setAttribute('x2', x.toFixed(2));
        line.setAttribute('y2', y.toFixed(2));
        tip.setAttribute('cx', x.toFixed(2));
        tip.setAttribute('cy', y.toFixed(2));
      }

      function animateTo(tx, ty) {
        var steps = 18;
        var sx = current.x;
        var sy = current.y;
        var n = 0;
        function tick() {
          n += 1;
          var p = n / steps;
          current.x = sx + (tx - sx) * p;
          current.y = sy + (ty - sy) * p;
          draw();
          if (n < steps) {
            requestAnimationFrame(tick);
          }
        }
        requestAnimationFrame(tick);
      }

      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var parts = btn.getAttribute('data-matrix').split(',').map(Number);
          var a = parts[0], b = parts[1], c = parts[2], d = parts[3];
          var tx = a * v.x + b * v.y;
          var ty = c * v.x + d * v.y;
          readout.textContent = 'A = [[' + a + ', ' + b + '], [' + c + ', ' + d + ']]';
          animateTo(tx, ty);
        });
      });

      draw();
    });
  }

  function initTensorMap() {
    var cards = document.querySelectorAll('[data-component="tensor-map"]');
    cards.forEach(function (card) {
      var q1 = card.querySelector('[data-role="tensor-q1"]');
      var q2 = card.querySelector('[data-role="tensor-q2"]');
      var output = card.querySelector('[data-role="tensor-output"]');
      var pulse = card.querySelector('[data-role="tensor-pulse"]');

      var yByState = {
        '00': 40,
        '01': 69,
        '10': 98,
        '11': 127
      };

      function update() {
        var s = q1.value + q2.value;
        output.textContent = '|'+ q1.value + '> (x) |' + q2.value + '> = |' + s + '>';
        var y = yByState[s];
        pulse.setAttribute('cy', String(y));
      }

      q1.addEventListener('change', update);
      q2.addEventListener('change', update);
      update();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initReveal();
    initQubitMeasurement();
    initBlochSphere();
    initVectorTransform();
    initTensorMap();
  });
})();
