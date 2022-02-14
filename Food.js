class Food {
    constructor() {

    }
    getCount() {
        var food_count_ref = database.ref('food_count');
        food_count_ref.on('value', (data)=>{
            food_count = data.val();
        });
    }
    updateCount(count) {
        database.ref('/').update({
            food_count: count
        });
    }
}