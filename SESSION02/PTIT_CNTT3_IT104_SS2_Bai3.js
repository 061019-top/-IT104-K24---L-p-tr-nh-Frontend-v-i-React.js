const typeConsole = (type = "log") => {
  const message = `Đây là type: ${type}`;
  console[type]?.(message) ?? console.log(message);
};


typeConsole("log");   
typeConsole("warn");  
typeConsole("error"); 
typeConsole();        
