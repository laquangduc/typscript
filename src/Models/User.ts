export class User {
  private _id: number;
  private _name: string;
  private _birthday: Date;
  private _email: string;
  private _password: string;

  public constructor (
    _id: number,
    _name: string,
    _email: string,
    _password: string,
    _birthday: Date
  ) {
    this._id = _id;
    this._name = _name;
    this._email = _email;
    this._password = _password;
    this._birthday = _birthday;
  }

  get id(): number {
    return this._id;
  }

  set id(_id: number) {
    this._id = _id;
  }

  get name(): string {
    return this._name;
  }

  set name(_name: string) {
    this._name = _name;
  }

  get email(): string {
    return this._email;
  }

  set email(_email: string) {
    this._email = _email;
  }

  get password(): string {
    return this._password;
  }

  set password(_password: string) {
    this._password = _password;
  }

  get birthday(): Date {
    return this._birthday;
  }

  set birthday(_birthday: Date) {
    this._birthday = _birthday;
  }
}
