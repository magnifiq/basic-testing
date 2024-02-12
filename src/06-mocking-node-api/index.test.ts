/* eslint-disable prettier/prettier */
// Uncomment the code below and write your tests
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';
import path from 'path';
import fs from 'fs';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const callback = jest.fn();
    const time = 1000;
    const spyOnSetTimeout = jest.spyOn(global, 'setTimeout');
    doStuffByTimeout(callback, time);
    expect(spyOnSetTimeout).toHaveBeenCalledTimes(1);
  });

  test('should call callback only after timeout', () => {
    const callback = jest.fn();
    const time = 1000;
    doStuffByTimeout(callback, time);
    expect(callback).not.toHaveBeenCalled();
    jest.runOnlyPendingTimers();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const callback = jest.fn();
    const time = 500;
    const spyOnSetInterval = jest.spyOn(global, 'setInterval');
    doStuffByInterval(callback, time);
    expect(spyOnSetInterval).toHaveBeenCalled();
  });

  test('should call callback multiple times after multiple intervals', () => {
    const callback = jest.fn();
    const time = 500;
    doStuffByInterval(callback, time);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(time);
    expect(callback).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(time);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    const spyOnPath = jest.spyOn(path, 'join');
    await readFileAsynchronously(path.join('./index.ts'));
    expect(spyOnPath).toHaveBeenCalled();
  });

  test('should return null if file does not exist', async () => {
    jest.spyOn(fs, 'existsSync').mockReturnValue(false);
    const resultOfReading = await readFileAsynchronously(
      './non-existing-file.txt',
    );
    expect(resultOfReading).toBeNull();
  });

  test('should return file content if file exists', async () => {
    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    jest
      .spyOn(fs.promises, 'readFile')
      .mockResolvedValue('wooooooow legend');
    const resultOfReading = await readFileAsynchronously(
      './legend.txt',
    );
    await expect(resultOfReading).toBe('wooooooow legend');
  });
});
