function parse(query) {
    query = query.trim().replace(";", "");
  
    if (query.startsWith("CREATE TABLE")) return { type: "CREATE", raw: query };
    if (query.startsWith("INSERT")) return { type: "INSERT", raw: query };
    if (query.startsWith("SELECT")) return { type: "SELECT", raw: query };
    if (query.startsWith("UPDATE")) return { type: "UPDATE", raw: query };
    if (query.startsWith("DELETE")) return { type: "DELETE", raw: query };
  
    throw new Error("Unknown command");
  }
  
  export default parse;


  