class Todo{
  
    constructor(id, creationDate, name, tags, priority){
      this.id = id;
      this._creationDate = creationDate.getTime();
      this.name = name;
      this.tags = tags;
      this.priority = priority
    }



    set creationDate(value){
      this._creationDate = value.getTime()
    }

    get creationDate (){
      return new Date(this._creationDate)
    }
    

    static fromObj(obj){
      return new Todo(obj.id, new Date(obj.creationDate*1000), obj.name, obj.tags, obj.priority)
    }

    static getFormatteDate(date){
      let minutes = date.getMinutes();
      minutes = minutes <= 9 ? '0' + minutes : minutes;
      const dateString = date.getDate()+ '/' + (date.getMonth() + 1) + '/' + (date.getFullYear() + ' - ' + date.getHours() + ':' + minutes);
      return dateString
    }


  
  }

  // static fromObj(obj){
  //   const element = new Todo(new Date(obj.creationDate*1000), obj.name, obj.tags, obj.priority);
  //   element.id = obj.id;
  //   if (obj.priority === 0) {
  //     // card.style["background"] = "rgba(181, 228, 140, 0.45)";
  //     // divTodo.style["background"] = "#497C1D";
  //     element.priority = Todo.PRIORITY.low
  //   } else if (obj.priority === 1) {
  //     // card.style["background"] = "rgba(253, 241, 173, 0.45)";
  //     // divTodo.style["background"] = "#AE9504";
  //     element.priority = Todo.PRIORITY.medium;
  //   } else if (obj.priority === 2) {
  //     // card.style["background"] = "rgba(251, 187, 98, 0.45)";
  //     // divTodo.style["background"] = "#C77605";
  //     element.priority = Todo.PRIORITY.high;
  //   } else if (obj.priority === 3) {
  //     // card.style["background"] = "rgba(255, 57, 46, 0.45)";
  //     // divTodo.style["background"] = "#b32620";
  //     element.priority = Todo.PRIORITY.veryHigh;
  //   } else {
  //     card.style["background"] = "rgba(167, 164, 164, 0.45)";
  //     divTodo.style["background"] = "#757374";

  //   }