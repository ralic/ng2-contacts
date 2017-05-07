/*
export interface Contact {
     id: string;
     firstName: string;
     lastName: string;
     title: string;
     company: string;
     image: string;
     skype: string;
     twitter: string;
     notes: string;
}
*/

export class Contact {
  constructor(
    public id: string,
    public firstName: string = '',
    public lastName: string = '',
    public title: string = '',
    public company: string = '',
    public imageURL: string = '',
    public skype: string = '',
    public twitter: string = '',
    public notes: string = ''
  ) { };
/*
  fromJson(json: any) {
    if (!json) { return; };

    return new Contact(
      json.id,
      json.first_name,
      json.last_name,
      json.title,
      json.company,
      json.image_url,
      json.skype,
      json.twitter,
      json.notes
    );
  };

  public toJson(stringify?: boolean): any {
    const doc = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      title: this.title,
      company: this.company
      //      image_url: this.image,
      //      skype: this.skype,
      //      twitter: this.twitter,
      //      notes: this.notes
    };

    //    return stringify ? JSON.stringify({ resource: [doc] }) : doc;
    return stringify ? JSON.stringify(doc) : doc;
  }
*/
}
