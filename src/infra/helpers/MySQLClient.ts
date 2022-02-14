import mysql, {
  RowDataPacket,
  OkPacket,
  ResultSetHeader,
  FieldPacket,
} from 'mysql2';
import { Pool } from 'mysql2/promise';
import { ObjectPrimitives } from '../../utils/TypesPrimitive';

interface ConnectionOptions {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
  connectionLimit: number;
}

export class MySQLClient {
  private readonly connection: Pool = null;

  constructor(connectionOptions: ConnectionOptions) {
    this.connection = mysql
      .createPool({
        ...connectionOptions,
        waitForConnections: false,
        namedPlaceholders: true,
      })
      .promise();
  }

  async query<
    T extends
      | RowDataPacket[][]
      | RowDataPacket[]
      | OkPacket
      | OkPacket[]
      | ResultSetHeader,
  >(
    query: string,
    values: ObjectPrimitives | unknown[],
  ): Promise<[T, FieldPacket[]]> {
    return this.connection.query(query, values);
  }

  async close(): Promise<void> {
    if (!this.connection) {
      console.info('Attempt to close connection already closed');
      return;
    }

    await this.connection.end();
  }
}
