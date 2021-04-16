# loading

코드에서

```
.loader span{
	transform: rotate(calc(18deg*var(--i)));
}
```

넣고 안넣고의 차이가 크다 번진 동그라미에서 선명한 동그라미가 보인다

```html
<html>
<body>
    <section>
        <div class="loader">
            <span style="--i:1;"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
            <span style="--i:4;"></span>
            <span style="--i:5;"></span>
            <span style="--i:6;"></span>
            <span style="--i:7;"></span>
            <span style="--i:8;"></span>
            <span style="--i:9;"></span>
            <span style="--i:10;"></span>
            <span style="--i:11;"></span>
            <span style="--i:12;"></span>
            <span style="--i:13;"></span>
            <span style="--i:14;"></span>
            <span style="--i:15;"></span>
            <span style="--i:16;"></span>
            <span style="--i:17;"></span>
            <span style="--i:18;"></span>
            <span style="--i:19;"></span>
            <span style="--i:20;"></span>
        </div>
    </section>
</body>
<style>
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: black;
        animation: animateBg 10s linear infinite;
    }
    @keyframes animateBg {
        0% {
            filter: hue-rotate(0deg);
        }
        100% {
            filter: hue-rotate(360deg);
        }
    }
    .loader {
        position: relative;
        width: 120px;
        height: 120px;
    }
    .loader span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: rotate(calc(18deg*var(--i)));
    }
    .loader span::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #99e9f2;
        box-shadow: 0 0 10px #99e9f2,
          					0 0 20px #99e9f2,
          					0 0 40px #99e9f2,
          					0 0 60px #99e9f2,
          					0 0 80px #99e9f2,
          					0 0 100px #99e9f2;
        animation: animate 2s linear infinite;
        animation-delay: calc(0.1s*var(--i));
    }
    @keyframes animate {
        0% {
            transform: scale(1);
        }
        80%, 100% {
            transform: scale(0);
        }
    }
    <style>
</html>
```

`animateBg` 로 인해서 색상이 변하고 `animate` 로 인해서 동그라미가 작았다 커졌다

- hue-rotate : hue(색조, 색상) 변경

---

출처: https://youtu.be/ttWXapXj4cg

