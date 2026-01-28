import Table from "./table.js";

class Engine {
  constructor() {
    this.tables = {};
  }

  execute(sql) {
    sql = sql.trim();

    if (sql.startsWith("CREATE TABLE")) {
      return this.createTable(sql);
    }

    if (sql.startsWith("INSERT")) {
      return this.insert(sql);
    }

    if (sql.startsWith("SELECT")) {
      return this.select(sql);
    }

    return "Unknown command";
  }

  createTable(sql) {
    // VERY SIMPLE PARSER (sufficient for demo)
    const name = sql.match(/CREATE TABLE (\w+)/i)[1];
    this.tables[name] = new Table(name, []);
    return `Table ${name} created`;
  }

  insert(sql) {
    const [, table, values] = sql.match(/INSERT INTO (\w+) VALUES \((.+)\)/i);
    const row = values.split(",").map(v => v.trim());
    this.tables[table].insert(row);
    return "Row inserted";
  }

  select(sql) {
    const [, table] = sql.match(/SELECT \* FROM (\w+)/i);
    return this.tables[table].select();
  }
}

export default new Engine();
