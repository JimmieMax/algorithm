import LinkedList from "../linked-list/LinkedList";
import LinkedListNode from "../linked-list/LinkedListNode";
import GraphEdge from "./GraphEdge";

export default class GraphVertex {
  value: any;
  edges;
  /**
   * @param {*} value
   */
  constructor(value: any) {
    if (value === undefined) {
      throw new Error("Graph vertex must have a value");
    }

    /**
     * @param {GraphEdge} edgeA
     * @param {GraphEdge} edgeB
     */
    const edgeComparator = (edgeA: GraphEdge, edgeB: GraphEdge) => {
      if (edgeA.getKey() === edgeB.getKey()) {
        return 0;
      }

      return edgeA.getKey() < edgeB.getKey() ? -1 : 1;
    };

    // Normally you would store string value like vertex name.
    // But generally it may be any object as well
    this.value = value;
    this.edges = new LinkedList();
  }

  /**
   * @param {GraphEdge} edge
   * @returns {GraphVertex}
   */
  addEdge(edge: GraphEdge) {
    this.edges.append(edge);
    return this;
  }

  /**
   * @param {GraphEdge} edge
   */
  deleteEdge(edge: GraphEdge) {
    this.edges.delete(edge);
  }

  /**
   * @returns {GraphVertex[]}
   */
  getNeighbors() {
    const edges = this.edges.toArray();

    /** @param {LinkedListNode} node */
    const neighborsConverter = (node: GraphEdge) => {
      return node.startVertex === this ? node.endVertex : node.startVertex;
    };

    // Return either start or end vertex.
    // For undirected graphs it is possible that current vertex will be the end one.
    return edges.map(neighborsConverter);
  }

  /**
   * @return {GraphEdge[]}
   */
  getEdges() {
    return this.edges.toArray().map((linkedListNode) => linkedListNode.value);
  }

  /**
   * @return {number}
   */
  getDegree() {
    return this.edges.toArray().length;
  }

  /**
   * @param {GraphEdge} requiredEdge
   * @returns {boolean}
   */
  hasEdge(requiredEdge: GraphEdge) {
    const edges = this.edges.toArray();
    const edgeNode = edges.find((edge) => edge === requiredEdge);
    return !!edgeNode;
  }

  /**
   * @param {GraphVertex} vertex
   * @returns {boolean}
   */
  hasNeighbor(vertex: GraphVertex) {
    const edges = this.edges.toArray();
    const vertexNode = edges.find(
      (edge: GraphEdge) =>
        edge.startVertex === vertex || edge.endVertex === vertex
    );

    return !!vertexNode;
  }

  /**
   * @param {GraphVertex} vertex
   * @returns {(GraphEdge|null)}
   */
  findEdge(vertex: GraphVertex) {
    const edges = this.edges.toArray();

    const edge = edges.find(edge => edge.startVertex === vertex || edge.endVertex === vertex);

    return edge ? edge : null;
  }

  /**
   * @returns {string}
   */
  getKey() {
    return this.value;
  }

  /**
   * @return {GraphVertex}
   */
  deleteAllEdges() {
    this.getEdges().forEach((edge) => this.deleteEdge(edge));

    return this;
  }

  /**
   * @param {function} [callback]
   * @returns {string}
   */
  toString(callback: Function) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
