export default function transformString (string = 'Lorem Ipsum Dolor Sit Amet') {
  if (typeof string === 'string') {
    let reversed = [];

    string.split (' ').map (word => {
      reversed.push (word.split ('').reverse ().join (''))
    });

    return reversed.join (' ');
  } else {
    throw new Error ('The attribute must be a string;');
  }
}
