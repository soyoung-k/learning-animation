# transform

트랜스폼은 이동(translate), 회전(rotate), 확대축소(scale), 비틀기(skew) 효과를 부여하기 위한 함수를 제공

애니메이션 효과를 제공하지는 않기 때문에 애니메이션 효과를 나타내고 싶으면 transition이나 애니메이션을 함께 사용해야 한다

| transform function    | 설명                                                         |     단위      |
| :-------------------- | :----------------------------------------------------------- | :-----------: |
| translate(x,y)        | 요소의 위치를 X축으로 x만큼, Y축으로 y만큼 이동시킨다.       | px, %, em 등  |
| translateX(n)         | 요소의 위치를 X축으로 x만큼 이동시킨다.                      | px, %, em 등  |
| translateY(n)         | 요소의 위치를 Y축으로 y만큼 이동시킨다.                      | px, %, em 등  |
| scale(x,y)            | 요소의 크기를 X축으로 x배, Y축으로 y배 확대 또는 축소 시킨다. |   0과 양수    |
| scaleX(n)             | 요소의 크기를 X축으로 x배 확대 또는 축소 시킨다.             |   0과 양수    |
| scaleY(n)             | 요소의 크기를 Y축으로 y배 확대 또는 축소 시킨다.             |   0과 양수    |
| skew(x-angle,y-angle) | 요소를 X축으로 x 각도만큼, Y축으로 y 각도만큼 기울인다.      | +/- 각도(deg) |
| skewX(x-angle)        | 요소를 X축으로 x 각도만큼 기울인다.                          | +/- 각도(deg) |
| skewY(y-angle)        | 요소를 Y축으로 y 각도만큼 기울인다.                          | +/- 각도(deg) |
| rotate(angle)         | 요소를 angle만큼 회전시킨다.                                 | +/- 각도(deg) |

```html
<!DOCTYPE html>
<html>
<body>
    <div>
        <p>translateX(20%)</p>
        <div class="box target2">box</div>
    </div>
    <br/>
    <div>
        <p>scale(2)</p>
        <div class="box target1">box</div>
    </div>
    <br/>
    <div>
        <p>skewY(-20deg)</p>
        <div class="box target3">box</div>
    </div>
    <br/>
    <div>
        <p>rotate(90deg)</p>
        <div class="box target4">box</div>
    </div>
</body>
<style>
    .box {
        background: darkturquoise;
        border-radius: 5px;
        height: 100px;
        transition: transform 1s;
        width: 100px;
    }

    .target1:hover {
        transform: scale(2, 3);
    }
    .target2:hover {
        transform: translateX(50%)
    }
    .target3:hover {
        transform: skewY(-20deg)
    }
    .target4:hover {
        transform: rotate(90deg)
    }
</style>
</html>
```

