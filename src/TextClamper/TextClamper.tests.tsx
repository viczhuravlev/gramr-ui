import React from 'react';
import renderer from 'react-test-renderer';

import TextClamper from './TextClamper';

describe('[component] TextClamper', () => {
  test('[Snapshot] TextClamper', () => {
    const tree = renderer
      .create(
        <TextClamper clamp="3">
          splitOnChars (Array). Determines what characters to use to chunk an element into smaller
          pieces. Version 0.1 of Clamp.js would always remove each individual character to check for
          fit. With v0.2, you now have an option to pass a list of characters it can use. For
          example, it you pass an array of ... then it will first remove sentences, then remove
          comma-phrases, and remove words, and finally remove individual characters to try and find
          the correct height. This will lead to increased performance and less looping when removing
          larger pieces of text (such as in paragraphs). The default is set to remove sentences
          (periods), hypens, en-dashes, em-dashes, and finally words (spaces). Removing by character
          is always enabled as the last attempt no matter what is submitted in the array.
        </TextClamper>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
