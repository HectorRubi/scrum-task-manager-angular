import { TaskStatus } from 'src/app/utils/tasks';

export class Task {
  private _title: string = '';
  private _description: string = '';
  private _status: TaskStatus = 'ready';

  constructor(title?: string, description?: string, status?: TaskStatus) {
    if (title)
      this.title = title;

    if (description)
      this.description = description;

    if (status)
      this.status = status;
  }

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get status(): TaskStatus {
    return this._status;
  }
  public set status(value: TaskStatus) {
    this._status = value;
  }

}
