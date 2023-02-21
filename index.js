const { Client } = require(‘pg’);

const client = new Client({
user: ‘jhellpphszhpqs’,
host: ‘ec2-34-194-158-176.compute-1.amazonaws.com’,
database: ‘dabpdt7nnn5pcf’,
password: ‘3c54c88485613de4e1d5e9be2e5511f33352ffb9f5b869197c1d0192ff37b2af’,
port: 5432,
})

client.connect()

app.get('/', (req, res) => {
  res.send('hello world!');
  console.log('Running');
});

app.set('port', process.env.PORT || 4000);

app.get('/display', (req, res) => {
  var micro_username = req.query.username;

  client.getConnection(function (err, connection) {
    if (err) { res.send('Error Database Connection'); }
    else {
      var sql = "SELECT * FROM public.\"PATIENT\"";
      client.query(sql, function (err, result) {
        if (err) { 
          
          console.log(err);
          res.status(400).send(err);
        }
        else {
          res.status(200).send(result);
        }
      connection.release();
      });
    }
  });
});

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});
