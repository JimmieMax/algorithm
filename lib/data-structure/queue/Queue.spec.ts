import Queue from "./Queue";
import { expect } from "chai";
import { describe, it } from "mocha";

describe('Queue', () => {
    it('should create empty queue', () => {
      const queue = new Queue();
      expect(queue).not.to.be.null;
      expect(queue.list).not.to.be.null;
    });
  
    it('should be possible to enqueue/dequeue objects', () => {
      const queue = new Queue();
  
      queue.enqueue({ value: 'test1', key: 'key1' });
      queue.enqueue({ value: 'test2', key: 'key2' });
  
      expect(queue.list).to.deep.equal([
        { value: "test1", key: "key1" },
        { value: "test2", key: "key2" },
      ]);
      expect(queue.dequeue().value).to.eql('test1');
      expect(queue.dequeue().value).to.eql('test2');
    });
  
    it('should peek data from queue', () => {
      const queue = new Queue();
  
      expect(queue.peek()).to.be.null;
  
      queue.enqueue(1);
      queue.enqueue(2);
  
      expect(queue.peek()).to.eql(1);
      expect(queue.peek()).to.eql(1);
    });
  
    it('should check if queue is empty', () => {
      const queue = new Queue();
  
      expect(queue.isEmpty()).to.eql(true);
  
      queue.enqueue(1);
  
      expect(queue.isEmpty()).to.eql(false);
    });
  
    it('should dequeue from queue in FIFO order', () => {
      const queue = new Queue();
  
      queue.enqueue(1);
      queue.enqueue(2);
  
      expect(queue.dequeue()).to.eql(1);
      expect(queue.dequeue()).to.eql(2);
      expect(queue.dequeue()).to.be.undefined;
      expect(queue.isEmpty()).to.eql(true);
    });
  });
  