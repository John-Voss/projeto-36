class Form {
    constructor() {

    }
    display() {
        var button1, button2;

        fill('black');
        textSize(20);
        text('Last lunch was at '+last_lunch+ " o'clock", 250, 40);

        button1 = createButton('Add Food');
        button1.position(750, 100);
        button2 = createButton('Feed the dog');
        button2.position(850, 100);

        fill('black')
        textSize(20);
        text('= '+ 'X'+food_count, 150, 320);

        button1.mousePressed(()=>{
            food_count ++;
            food.updateCount(food_count);
        });
        if(food_count > 0) {
            button2.mousePressed(()=>{
                dog.changeImage('happyDog', happyDog);
                last_lunch += 6;
                lastlunch.updateCount(last_lunch);
                food_count = food_count - 1;
                food.updateCount(food_count);
            });
        };
        if(food_count <= 0) {
            food_count = 0;
            food.updateCount(food_count);
          }
    }
}