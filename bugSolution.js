```javascript
// Correct use of $inc and $setOnInsert operators
db.collection.updateOne({name: "John"}, {$inc: {age: -1}, $setOnInsert: {age: 0}});
```