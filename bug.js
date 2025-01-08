```javascript
// Incorrect use of $inc operator in MongoDB update query
db.collection.updateOne({name: "John"}, {$inc: {age: -1}});
```