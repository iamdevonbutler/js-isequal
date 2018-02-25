module.exports = isEqual;

function isEqual(...objs) {
  console.log(objs.length);
  if (objs.length < 2) return false;
  for (let i in objs) {
    i = +i;
    if (objs[i+1] !== undefined) {
      if (isArray(objs[i])) {
        if (!compareArrays(objs[i], objs[i+1])) {
          return false;
        }
      }
      else if (isObject(objs[i])) {
        if (!compareObjects(objs[i], objs[i+1])) {
          return false;
        }
      }
      else if (isDate(objs[i])) {
        if (!compareDates(objs[i], objs[i+1])) {
          return false;
        }
      }
      else {
        if (objs[i] !== objs[i+1]) {
          return false;
        }
      }
    }
  };

  return true;
};

function compare(obj, obj1) {
  for (let i in obj) {
    if (obj1[i] === undefined) {
      return false;
    }
    if (isArray(obj[i])) {
      if (!compareArrays(obj[i], obj1[i])) {
        return false;
      }
    }
    else if (isObject(obj[i])) {
      if (!compareObjects(obj[i], obj1[i])) {
        return false;
      }
    }
    else if (isDate(obj[i])) {
      if (!compareDates(obj[i], obj1[i])) {
        return false;
      }
    }
    else {
      if (obj[i] !== obj1[i]) {
        return false;
      }
    }
  }
  return true;
};

function compareArrays(obj, obj1) {
  if (!isArray(obj1)) return false;
  if (obj.length !== obj1.length) return false;
  var equal = compare(obj, obj1);
  return equal;
};

function compareObjects(obj, obj1) {
  if (!isObject(obj1)) return false;
  for (let key in obj1) {
    if (obj[key] === undefined) {
      return false;
    }
  }
  var equal = compare(obj, obj1);
  return equal;
};

function compareDates(obj, obj1) {
  if (!isDate(obj1) || obj.getTime() !== obj1.getTime()) {
    return false;
  }
  return true;
};

function isArray(obj) {
  return Array.isArray(obj);
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null && Array.isArray(obj) == false && !(obj instanceof Date);
}

function isDate(obj) {
  return obj instanceof Date;
}
