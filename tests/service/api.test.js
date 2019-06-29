var http = require('http');
var assert = require('assert');

function request(url, data, done) {
  var options = {
    method: 'POST',
    hostname: 'localhost',
    port: 801,
    path: '/yd/first/yii2-app-basic/web/books/' + url,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    // console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      console.log(chunk);
      // assert.equal(1, "1");
      if (chunk) {
        done(); //表示异步测试完成
      } else {
        done(new Error('list数据测试出错'));
      }
    });
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
    done(e.message);
  });

  req.write(data);
  req.end();
}

describe('api接口测试', function() {
  it('接口测试=>list', function(done) {
    var data = JSON.stringify({
      type: 'getlist'
    });

    request('list', data, done);
  });
  it('接口测试=>edits', function(done) {
    var data = JSON.stringify({
      id: 41,
      name: 'test' + parseInt(Math.random() * 10)
    });
    request('edits', data, done);
  });
  it('接口测试=>adds', function(done) {
    var data = JSON.stringify({
      name: 'test'
    });
    request('adds', data, done);
  });
  it('接口测试=>searchs', function(done) {
    var data = JSON.stringify({
      name: 'test'
    });
    request('searchs', data, done);
  });
  it('接口测试=>deletes', function(done) {
    var data = JSON.stringify({
      id: 42
    });
    request('deletes', data, done);
  });
});
