<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <title>Dãy số 1 đến 100</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .number {
      display: inline-block;
      width: 40px;       /* tùy chọn để căn đều */
      text-align: center;
      margin: 4px;
    }
    .even {
      color: red;
      font-weight: bold;
    }
    .odd {
      color: green;
      font-weight: bold;
      font-style: italic;
    }
  </style>
</head>
<body>
  <h2>Dãy số từ 1 đến 100</h2>
  <div>
    <?php
      for ($i = 1; $i <= 100; $i++) {
        $class = ($i % 2 === 0) ? 'even' : 'odd';
        // in mỗi số trong một span để dễ style
        echo "<span class='number $class'>{$i}</span>";
        // nếu muốn mỗi 10 số xuống dòng:
        if ($i % 10 === 0) echo "<br>";
      }
    ?>
  </div>
</body>
</html>
