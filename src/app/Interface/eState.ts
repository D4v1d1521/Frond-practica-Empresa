export enum EState {

    ACTIVE = 1,
    INACTIVE = 2,
    DELETED = 3   
}

export function fromInt(value: number): EState {
    switch (value) {
      case 0:
        return EState.ACTIVE;
      case 1:
        return EState.INACTIVE;
      case 2:
        return EState.DELETED;
      default:
        throw new Error('Invalid State value: ' + value);
    }
}
