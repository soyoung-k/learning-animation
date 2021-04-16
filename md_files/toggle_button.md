# toggle_button



```html
<html>
<body>
    <div class="center">
        <input type="checkbox" name="">
    </div>
</body>
<style>
    body {
        margin: 0;
        padding: 0;
    }
    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    input[type='checkbox'] {
        position: relative;
        width: 80px;
        height: 40px;
        -webkit-appearance: none;
        background: #d0bfff;
        outline: none;
        border-radius: 20px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        /* transition:.5s; */
    }
    input:checked[type='checkbox'] {
        background: #9775fa;
    }
    input[type='checkbox']:before {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        top: 0;
        left: 0;
        background: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
        transition: 0.5s;
    }
    input:checked[type='checkbox']:before {
        left: 40px;
    }
</style>

</html>
```

#### 

-  -webkit-appearance : element(요소)의 고유 형태를 바꿀 때

  ​	IE지원 X

  ```
  -webkit-appearance: button; /* WebKit */
  -moz-appearance: button; /* Mozilla */
  -o-appearance: button; /* Opera */
  -ms-appearance: button; /* Internet Explorer */
  appearance: button; /* CSS3 */
  ```

  

