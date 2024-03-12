const express = require('express');
const app = express();
const port = 3000;

// 정적 파일 제공을 위한 디렉토리 설정
app.use(express.static('public'));

// 루트 경로로 접속했을 때 index.html 파일을 보내기
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
