# transition

트랜지션은 css 속성을 변경할 때 애니메이션 속도를 조절하는 방법을 제공

속성 변경이 즉시 영향을 미치게 하는 대신, 그 속성의 변화가 일정 기간에 걸쳐 일어나도록 함

### How?

-   어떤 속성을 움직이게 할 것인지 : `transition-property`
-   언제 애니메이션을 시작할지 : `transition-delay`
-   트랜지션을 얼마나 지속할지 : `transition-duration`
-   어떻게 트랜지션을 변화시킬건지 : `transition-timing-function`

아래와 같은 단축 css 문법을 사용한다

```css
div {
    transition: <property> <duration> <timing-function> <delay>;
}
```

#### 🔎 transition-property

```css
 {
    transition-property: value;
}
/*
value
 - none: 없음
 - all: 모든 속성에 적용
 - {css 속성}
*/
```

{:title} transition-property 예시

```html
<!DOCTYPE html>
<html>
    <body>
        <h3>hover on box</h3>
        <div>
            <p>transition-property:font-size; transition-duration: 3s;</p>
            <div class="box target1">box1</div>
        </div>
        <br />
        <div>
            <p>transition-property:all; transition-duration: 3s;</p>
            <div class="box target2">box2</div>
        </div>
        <br />
    </body>
    <style>
        .box {
            background-color: #b197fc;
            width: 100px;
            height: 100px;
        }
        .box:hover {
            font-size: 30px;
            width: 200px;
            background-color: #ffe066;
        }

        .target1 {
            transition-property: font-size;
            transition-duration: 3s;
        }
        .target2 {
            transition-property: all;
            transition-duration: 3s;
        }
    </style>
</html>
```

#### 🔎 transition-timing-function

트랜지션이 실행되는 동안의 속도 설정

-   ease : 시작은 천천히 중간에는 빠르게 그리고 다시 끝에는 천천히 변화
-   ease-in : 천천히 시작해서 빠르게 종료
-   ease-out : 빠르게 시작해서 느리게 종료
-   ease-in-out : 시작, 종료 두 지점 다 천천히 변화
-   lenear : 일정한 속도로 변화

```html
<!DOCTYPE html>
<html>
    <body>
        <div>
            <p>transition-timing-function: ease;</p>
            <div class="box target1">box1</div>
        </div>
        <hr />
        <div>
            <p>transition-timing-function: ease-in;</p>
            <div class="box target2">box2</div>
        </div>
        <hr />
        <div>
            <p>transition-timing-function: ease-out;</p>
            <div class="box target3">box3</div>
        </div>
        <hr />
        <div>
            <p>transition-timing-function: ease-in-out;</p>
            <div class="box target4">box4</div>
        </div>
        <hr />
        <div>
            <p>transition-timing-function: lenear;</p>
            <div class="box target5">box5</div>
        </div>
    </body>
    <style>
        .box {
            background-color: #b197fc;
            width: 100px;
            height: 100px;
            transition-property: all;
            transition-duration: 3s;
        }
        .box:hover {
            font-size: 30px;
            width: 200px;
            background-color: #ffe066;
        }

        .target1 {
            transition-timing-function: ease;
        }
        .target2 {
            transition-timing-function: ease-in;
        }
        .target3 {
            transition-timing-function: ease-out;
        }
        .target4 {
            transition-timing-function: ease-in-out;
        }
        .target5 {
            transition-timing-function: lenear;
        }
    </style>
</html>
```

-   steps(단계 횟수, start 또는 end) : 지정해준 횟수만큼 위에서 지정된 시간 동안 동일한 간격을 가지고 변화를 가져감
    -   start : 시작과 동시에 변화
    -   end : 완료 시점에 마지막 스템의 변화
-   step-start : steps(1,start)와 동일
-   step-end : steps(1,end)와 동일

```html
<!DOCTYPE html>
<html>
    <body>
        <div>
            <p>transition-timing-function: steps(4, jump-start);</p>
            <div class="box target1">box1</div>
        </div>
        <hr />
        <div>
            <p>transition-timing-function: steps(10, jump-end);</p>
            <div class="box target2">box2</div>
        </div>
        <hr />
        <div>
            <p>transition-timing-function: steps(20, jump-none);</p>
            <div class="box target3">box3</div>
        </div>
        <hr />
        <div>
            <p>transition-timing-function: steps(5, jump-both);</p>
            <div class="box target4">box4</div>
        </div>
        <hr />
        <div>
            <p>transition-timing-function: steps(6, start);</p>
            <div class="box target5">box5</div>
        </div>
        <hr />
        <div>
            <p>transition-timing-function: steps(8, end);</p>
            <div class="box target6">box6</div>
        </div>
        <hr />
        <div>
            <p>transition-timing-function: step-start;</p>
            <div class="box target7">box7</div>
        </div>
        <hr />
        <div>
            <p>transition-timing-function: step-end;</p>
            <div class="box target8">box8</div>
        </div>
        <hr />
    </body>
    <style>
        .box {
            background-color: #b197fc;
            width: 100px;
            height: 100px;
            transition-property: all;
            transition-duration: 3s;
        }
        .box:hover {
            font-size: 30px;
            width: 200px;
            background-color: #ffe066;
        }

        .target1 {
            transition-timing-function: steps(4, jump-start);
        }
        .target2 {
            transition-timing-function: steps(10, jump-end);
        }
        .target3 {
            transition-timing-function: steps(20, jump-none);
        }
        .target4 {
            transition-timing-function: steps(5, jump-both);
        }
        .target5 {
            transition-timing-function: steps(4, jump-start);
        }
        .target6 {
            transition-timing-function: steps(8, end);
        }
        .target7 {
            transition-timing-function: step-start;
        }
        .target8 {
            transition-timing-function: step-end;
        }
    </style>
</html>
```

-   cubic-bezier(x1,y1,x2,y2)

    ![img](https://developer.mozilla.org/files/3434/TF_with_output_gt_than_1.png)

    변화를 줄 시간을 x축, 변화의 진행 정도를 y축

    시작점을 P0, 종료점을 P3라고 두고 두 점 사이에 어떠한 변화를 줄 두 군데의 점 P1(x1,y1)와 P2(x2,y2)도 정해준다고 했을 경우 여기에 원하는 값을 cubic-bezier를 이용해서 지정하고 변화의 타잉밍과 진행상태를 결정해 줄 수가 있다

```html
<!DOCTYPE html>
<html>
    <body>
        <div>
            <p>transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);</p>
            <div class="box target1">box1</div>
        </div>
    </body>
    <style>
        .box {
            background-color: #b197fc;
            width: 100px;
            height: 100px;
            transition-property: all;
            transition-duration: 3s;
        }
        .box:hover {
            font-size: 30px;
            width: 200px;
            background-color: #ffe066;
        }

        .target1 {
            transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
        }
    </style>
</html>
```
