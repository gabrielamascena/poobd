const {Pool} = require('pg');

async function criarConexao(){
    const poll = new Pool({
        connectionString: '',
        ssl: {
            rejectUnauthorized: false
        }
    });
    let con = await poll.connect();

    /*await con.query(`create table pizza(
            id serial,
            sabores varchar,
            constraint pizza_pk primary key (id)
        )`
    );
    await con.query(
        `insert into pizza( sabores) values 
            ($1), ($2), ($3), ($4)`, 
            ['bacon', 'portuguesa', 'calabresa', 'lombo']
    );

  await con.query("delete from pizza where sabores like $1", ["bacon%"]);
  await con.query(`update pizza set sabores = $2 where id = $3`, ['calabresa']);
  */

  let res = await con.query('select * from pizza');
    console.log(res);
    con.release();   
}
criarConexao();