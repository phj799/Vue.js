// 로그의 레벨 7
// --------------------------------------------->
// error, warn, info, http, verbose, debug, silly
// error, wran, info, debug

// error -> 에러 기록
// warn -> 에러는 아니지만 유의할 내용
// info -> 내용
// debug 상세한 데이터들
// 이런 것들을 살펴볼 수 있도록 도와주는 logging library가 winston임

// 원격 로그 수집 시스템 (elastic stack)
// 여러군데 모여있는 로그를 한군데서 조회하고싶은경우 공부해볼 것

const express = require('express');
const morgan = require('morgan');
const logger = require('./utils/log');
const app = express();
app.use(morgan('dev'));
const PORT = 8080;

// node.js에서 __filename 현재 실행 중인 파일 경로
// __dirname 현재 실행 중인 폴더 경로를 나타냄
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.use(express.static(__dirname + "/views"));

const fs = require("fs");

// 현재 시간대 맞는 파일 가져오기
const moment = require('moment');
const now = moment().format('YYYY-MM-DD-HH');

app.get("/api/logs", (req, res) => {
  logger.error("error 메세지");
  logger.warn("warn 메세지");
  logger.info("info 메세지");
  logger.http("http 메세지");
  logger.debug("debug 메세지");
  // console.log(now);
  fs.readFile(`./logs/${now}.log`, "utf-8", (err, data) => {
    const datalines = data.split('\r\n').slice(0,-1);
    const datajson = datalines.map((data) => JSON.parse(data));
    // console.log(datajson);
    return res.json(datajson);
  });
});

app.listen(PORT, () => console.log(`${PORT} 서버 기동중`))