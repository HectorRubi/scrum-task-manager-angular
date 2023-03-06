import { TaskStatus } from 'src/app/utils/tasks';

export class Task {
  private _description: string = '';
  private _status: TaskStatus = 'ready';

  constructor(description?: string, status?: TaskStatus) {
    if (description) {
      this.description = description;
    }

    if (status) {
      this.status = status;
    }
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
