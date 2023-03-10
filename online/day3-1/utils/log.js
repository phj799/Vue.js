// winston -> node의 대표적인 로그 라이브러리
// winston-daily-rotate-file -> 로그 관리 라이브러리
const winston = require('winston');
const { format } = winston;
// winston.format.combine;
const { combine } = format;
require('winston-daily-rotate-file');

const transport = new winston.transports.DailyRotateFile({
  level :'info',
  // 저장할 파일 이름
  filename: "./logs/%DATE%.log",
  // 날짜 형식
  datePattern : "YYYY-MM-DD-HH",
  zippedArchive: true,
  // 파일의 최대 크기
  maxSize: "20m",
  // 보관할 최대 로그 수
  // 하루 별로 저장
  maxFiles: "1d" 
});

const logger = winston.createLogger({
  transports: [transport]
})

module.exports = logger;