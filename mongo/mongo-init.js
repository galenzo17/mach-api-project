db.createUser({
    user: 'root',
    pwd: 'example',
    roles: [
      {
        role: 'readWrite',
        db: 'defaultDB',
      },
    ],
  });
  db.createCollection('users', { capped: false });
  db.createCollection('test', { capped: false });
  
  db.test.insert([
    { "item": 1 },
    { "item": 2 },
    { "item": 3 },
    { "item": 4 },
    { "item": 5 }
  ]);