# water_wave_text

```html
<html>
<body>
	<div class="content">
        <h2>Water</h2>
        <h2>Water</h2>
    </div>
</body>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #000;
}
.content {
    position: relative;
}
.content h2 {
    position: absolute;
    color: #fff;
    transform: translate(-50%, -50%);
    font-size: 8em;
}
.content h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #03a9f4;
}
.content h2:nth-child(2) {
    color: #03a9f4;
    animation: animate 4s ease-in-out infinite;
}
@keyframes animate {
    0%,
    100% {
        clip-path: polygon(
            0% 44%,
            17% 32%,
            35% 31%,
            53% 35%,
            63% 42%,
            78% 51%,
            91% 53%,
            99% 48%,
            100% 100%,
            0% 100%
        );
    }
    50% {
        clip-path: polygon(
            0 54%,
            17% 49%,
            35% 52%,
            53% 56%,
            63% 40%,
            75% 31%,
            88% 29%,
            100% 28%,
            100% 100%,
            0% 100%
        );
    }
}
</style>
</html> 
```

- 폴리곤 clip-path의 경우 `css clip path maker`  라는 키워드를 이용하여 검색해서 사이트를 찾을 수 있다

- `transform: translate(-50%, -50%);` : 요소의 위치를 x 만큼 -50%, y만큼 -50% 이동

  함으로써 텍스트가 정가운데로 오게 되었다. 
  (왤까..?전부 center로 해주었는데...)

- ` -webkit-text-stroke` : 텍스트 외곽선