/**
 * Created by tougo on 19/12/15.
 */
module.exports = {
    select: function (what) {
        return " SELECT " + what;
    },
    from: function (table) {
        return " FROM " + table;
    },
    innerjoin: function (table1, table2, attribute) {
        return " INNER JOIN " + table2 + " ON " + table1 + "." + attribute + " = " + table2 + "." + attribute;
    },
    leftjoin: function (table1, table2, attribute) {
        return " LEFT JOIN " + table2 + " ON " + table1 + "." + attribute + " = " + table2 + "." + attribute;
    },
    where: function (expression) {
        return " WHERE " + expression;
    },
    insertinto: function (table, attributes, values) {
        if (attributes.length === values.length) {
            return " INSERT INTO " + table + "(" + attributes.join() + ") VALUES " + "(" + values.join() + ")";
        }
        return "attribute, values length missmatch";
    },
    insertintowithoutputid: function (table, attributes, values, keyname) {
        if (attributes.length === values.length) {
            return " INSERT INTO " + table + "(" + attributes.join() + ") VALUES " + "(" + values.join() + ") RETURNING "+ keyname ;
        }
        return "attribute, values length missmatch";
    },
    update: function (table, attributes, values) {
        if (attributes.length === values.length) {
            var sql = " UPDATE " + table + " SET ";
            var i;
            var set = [];
            for (i = 0; i < attributes.length; i+=1) {
                set.push(attributes[i] + "=" + values[i]);
            }
            sql += set.join();
            return sql;
        }
        return "attribute, values length missmatch";
    },
    delete: function () {
        return " DELETE ";
    },
    groupby: function(attributes) {
        var sql =" GROUP BY(";
        if (attributes.length > 0){
            sql += attributes.join();
            sql += ")";
            return sql;
        }
        return "attribute array is empty or inconsistent";
    },
    union: function(query1, query2) {
      return query1+ " UNION " +query2;
    },
    intersect: function(query1, query2) {
      return query1+ " INTERSECT " +query2;
    },
    except: function(query1, query2) {
      return query1+ " EXCEPT " +query2;
    },
    orderby: function(attributes, ordertype) {
      var sql = " ORDER BY";
      var orderby = [];
      if (attributes.length === ordertype.length) {
        var i;
        for (i = 0; i < attributes.length; i+=1) {
              orderby.push(attributes[i] + " " + ordertype[i]);
            }
            sql += orderby.join();
            return sql;
        }
        return "attribute, ordertype length missmatch";
    },
    primarykey: function(table) {
      var sql = "SELECT a.attname, format_type(a.atttypid, a.atttypmod) AS data_type FROM   pg_index i JOIN   pg_attribute a ON a.attrelid = i.indrelid AND a.attnum = ANY(i.indkey) WHERE  i.indrelid = '"+ table+"'::regclass AND i.indisprimary";
      return sql;
    }
}
