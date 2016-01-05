# tougo-query-builder
query builder for postgres
A little library for constructing raw sql queries.

# examples
### example 1
SELECT * FROM PROPERTY
```javascript
var q = qb.select('*')+qb.from('property');
```
### example 2
SELECT * FROM PROPERTY LEFT JOIN TENANT ON PROPERTY.TENANT_ID = TENANT.TENANT_ID
```javascript
var q = qb.select('*') + qb.from('property')+qb.leftjoin('property','tenant', 'tenant_id');
```
### example 3
UPDATE TENANT SET at1 = 'val1', at2 = 'val2' WHERE tenant_id = 27
```javascript
var attributes = ["at1", "at2"];
var values = ["'val1'", "'val2'"];
var keyexpression = "tenant_id = 27";
var q = qb.update("tenant", attributes, values)+qb.where(keyexpression);
```

# methods
```javascript
var Constructor = require('tougo-query-builder');
```

# install
```bash
npm install tougo-query-builder
```

# license
ISC
