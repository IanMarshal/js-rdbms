
class Table {
  constructor(name, columns, primaryKey = null, uniqueKeys = []) {
    this.name = name;
    this.columns = columns;
    this.primaryKey = primaryKey;
    this.uniqueKeys = uniqueKeys;
    this.rows = [];
    this.indexes = {};
  }

  insert(row) {
    if (this.primaryKey) {
      if (this.rows.find(r => r[this.primaryKey] === row[this.primaryKey])) {
        throw new Error("Primary key violation");
      }
    }

    for (let key of this.uniqueKeys) {
      if (this.rows.find(r => r[key] === row[key])) {
        throw new Error(`Unique key violation on ${key}`);
      }
    }

    this.rows.push(row);
  }

  select(whereFn = () => true) {
    return this.rows.filter(whereFn);
  }

  update(whereFn, updates) {
    this.rows.forEach(row => {
      if (whereFn(row)) Object.assign(row, updates);
    });
  }

  delete(whereFn) {
    this.rows = this.rows.filter(r => !whereFn(r));
  }
}

export default Table;
