class LastLunch{
    constructor() {

    }
    getCount() {
        var last_lunch_ref = database.ref('last_lunch');
        last_lunch_ref.on('value', (data)=>{
            last_lunch = data.val();
        });
    }
    updateCount(count) {
        database.ref('/').update({
            last_lunch: count
        });
    }
}