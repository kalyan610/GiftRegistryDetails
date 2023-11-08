import * as React from 'react';
import styles from './GiftRegistrationDetails.module.scss';
import { IGiftRegistrationDetailsProps } from './IGiftRegistrationDetailsProps';
import {Stack,StackItem,IStackStyles} from 'office-ui-fabric-react'; 
import Service from './Service1';
import { Checkbox} from 'office-ui-fabric-react/lib/Checkbox'; 

//const sectionStackTokens: IStackTokens = { childrenGap: 10 };
const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { padding: 10} };
const stackTokens1 = { childrenGap: 80 };

let RequestType='';

let itemId='';

let RecordId='';





export interface IGiftRegistrationDetails
{
  
  MyCountryName:any;
  CountryItems:any;
  MyRequesType:any;
  UserLoginName:any;


  recivedlistItems: any[];
  FlasgRecievedData:boolean;
  TotalrecivedPages:number;
  NofItemsPerPage:number;
  TempListItems: any[];

  TotalPages: number;
  flag:boolean;

  YourNameRecieved:string;
  YourTitleRecieved:string;
  CountryReciveved:string;

  FromNameReceived:string;
  IsgiverPRPReceived:string;
  FromCompanyReceived:string;
  FromTitleReceived:String;
  FromAddressReceived:string;

  ValueofgiftReceived:string;
  CurrencyReceived:string;
  DescriptionofGiftReceieved:string;

  Recevingpart:string;
  dtgiftrecieved:any;
  Businesspurposeofgiftreceived:string;
  addcommentsrecived:string;

  AttachmentFiles:any;

  //Given

  GivenlistItems:any[];
  FlagGivenData:boolean;
  TotalGivenPages:number;

  YourNameGiven:string;
  YourTitleGiven:string;
  CountryGiven:string;
  TempListItemsGiven:any[];

  Givename:any;
  MyYesnoGiven:any;
  GivenCompany:any;
  GivenTitle:any;
  GivenAddress:any;

  ValueofGiftgiven:any;
  MyCurrencyvalueGiven:any;
  descofgitgiven:any;
  Givingparty:any;
  dtgiftgiven:any;

  businesspurposegiftgiven:any;
  addcommentsgiven:any;
  GiftRegistryIDGiven:any;
  GiftRegistryIDRecevied:any;

  TempListItemsRecived:any[];

  AllListItems:any[];

  RiskReviewerGiven:any;
  RiskReviewGiven:any;
  RiskApprovesignGiven:any;
  SignoffGiven:any;

  RiskReviewerRecived:any;
  RiskReviewRecived:any;
  RiskApprovesignRecived:any;
  SignoffRecived:any;
  Mycheckbox:boolean;

  ReciverComments:any;
 

}


export default class GiftRegistrationDetails extends React.Component<IGiftRegistrationDetailsProps, IGiftRegistrationDetails> {
  
  public _service: any;
  public GlobalService1: any;
  protected ppl:any;

  public constructor(props:IGiftRegistrationDetailsProps) {

    super(props);

    this.state={

      MyCountryName:"",
      CountryItems:[],
      MyRequesType:"",
      UserLoginName:"",

      recivedlistItems:[],
      FlasgRecievedData:false,
      TotalrecivedPages:null,
      NofItemsPerPage:10,
      TempListItems:[],

      TotalPages: null,
      flag:false,

      YourNameRecieved:"",
      YourTitleRecieved:"",
      CountryReciveved:"",

      FromNameReceived:"",
      IsgiverPRPReceived:"",
      FromCompanyReceived:"",
      FromTitleReceived:"",
      FromAddressReceived:"",

      ValueofgiftReceived:"",
      CurrencyReceived:"",
      DescriptionofGiftReceieved:"",

      Recevingpart:"",
      dtgiftrecieved:"",
      Businesspurposeofgiftreceived:"",
      addcommentsrecived:"",
      AttachmentFiles:[],

      GivenlistItems:[],
      FlagGivenData:false,
      TotalGivenPages:null,

      YourNameGiven:"",
      YourTitleGiven:"",
      CountryGiven:"",
      TempListItemsGiven:[],

      Givename:"",
      MyYesnoGiven:"",
      GivenCompany:"",
      GivenTitle:"",
      GivenAddress:"",

      ValueofGiftgiven:"",
      MyCurrencyvalueGiven:"",
      descofgitgiven:"",
      Givingparty:"",
      dtgiftgiven:"",
      businesspurposegiftgiven:"",
      addcommentsgiven:"",
      GiftRegistryIDGiven:"",
      GiftRegistryIDRecevied:"",
      TempListItemsRecived:[],
      AllListItems:[],
    
      RiskReviewerGiven:"",
      RiskReviewGiven:"",
      RiskApprovesignGiven:"",
      SignoffGiven:"",
    
      RiskReviewerRecived:"",
      RiskReviewRecived:"",
      RiskApprovesignRecived:"",
      SignoffRecived:"",
      Mycheckbox:true,
      ReciverComments:""

    };

  
    this._service = new Service(this.props.url, this.props.context);
    
    this.GlobalService1 = new Service(this.props.url, this.props.context);

         
    itemId = this.getParam('SID');

    RequestType = this.getParam1('Request');

   
    this.GetData();
   

    


  }

  public async GetData()
  {

    if(itemId!="" && RequestType=='Received')
    {
   
     this.getuserrecordsRecived();
     
    }

    //Pending && this.state.ApproverExsits==true

    else if(itemId!="" && RequestType=='Given')
    {

      this.getuserrecordsGiven();

      
   
    }

 
  }

  public async getuserrecordsRecived()
  {

    let myitemId = this.getParam('SID');
    RequestType = this.getParam1('Request');

    
    RecordId=myitemId;
    let ItemInfo1 = await this._service.getItemByIDRecived(RecordId);

    this.setState({ recivedlistItems: ItemInfo1 });

    this.setState({AttachmentFiles:ItemInfo1.AttachmentFiles})

    

  if (ItemInfo1.Title != '') 
  {

    this.setState({YourNameRecieved:ItemInfo1.YourName});
    this.setState({YourTitleRecieved:ItemInfo1.YourTitle});
    this.setState({CountryReciveved:ItemInfo1.CountryName});

     

      //region2
      this.setState({FromNameReceived:ItemInfo1.FromName});
      this.setState({IsgiverPRPReceived: ItemInfo1.IsGiveraPEP})
      this.setState({FromCompanyReceived:ItemInfo1.FromCompany});
      this.setState({FromTitleReceived:ItemInfo1.FromTitle});
      this.setState({FromAddressReceived:ItemInfo1.FromAddress});

      //End

      //region3

      this.setState({ValueofgiftReceived:ItemInfo1.ValueofGift});
      this.setState({CurrencyReceived: ItemInfo1.Currency})
      this.setState({DescriptionofGiftReceieved:ItemInfo1.DescriptionofGift});

      //End

    this.setState({Recevingpart:ItemInfo1.ReceivingParty});
     let strdoj= ItemInfo1.DateGiftWasReceived.split('T');
     strdoj[0].replace("-","/");
    let mainstr=strdoj[0].replace("-","/");
    //let strToDate = new Date(mainstr);
    this.setState({dtgiftrecieved:mainstr})

    this.setState({Businesspurposeofgiftreceived:ItemInfo1.BusinessPurposeofGift});
    this.setState({addcommentsrecived:ItemInfo1.AdditionalCommentsforGift});
    this.setState({addcommentsrecived:ItemInfo1.GiftRegistryID});
    this.setState({GiftRegistryIDRecevied:ItemInfo1.GiftRegistryID});

    this.setState({AttachmentFiles:ItemInfo1.AttachmentFiles})

    this.setState({AttachmentFiles:ItemInfo1.AttachmentFiles})

    //Received

    if(ItemInfo1.Status=='Approved')
    {
    
    this.setState({RiskReviewRecived:ItemInfo1.RiskReviewPolicy});
    this.setState({SignoffRecived:ItemInfo1.SignOff.EMail});
    this.setState({RiskReviewerRecived:ItemInfo1.RiskReviewer.EMail});
    this.setState({ReciverComments:ItemInfo1.ReviewerComments})

    }



    }

 

  }

  public async getuserrecordsGiven()
  {

    let myitemId = this.getParam('SID');
    RequestType = this.getParam1('Request');

    RecordId=myitemId;

   let ItemInfo = await this._service.getItemByIDGiven(RecordId);
   this.setState({AttachmentFiles:ItemInfo.AttachmentFiles})

    console.log(ItemInfo);

    if (ItemInfo.Title != '') 
    
    {

      //region1

     this.setState({YourNameGiven: ItemInfo.YourName })
     this.setState({YourTitleGiven: ItemInfo.YourTitle })
     this.setState({CountryGiven:ItemInfo.CountryName})
     //problem
    
     this.setState({MyYesnoGiven:ItemInfo.IsGiveraPEP})
    //endregion

    //region2
    this.setState({Givename:ItemInfo.Name});
    //Problem
    this.setState({MyYesnoGiven:ItemInfo.EntertainmentgiventoPEP});
    this.setState({GivenCompany:ItemInfo.Company});
    this.setState({GivenTitle:ItemInfo.TitleforGivenGift});
    this.setState({GivenAddress:ItemInfo.Address});
    //endregion
   
    //region3

    this.setState({ValueofGiftgiven:ItemInfo.ValueofGift});
    this.setState({MyCurrencyvalueGiven:ItemInfo.CurrencyofGiftId});
    this.setState({descofgitgiven:ItemInfo.DescriptionofGift});
    this.setState({Givingparty:ItemInfo.GivingParty});

   let strdoj= ItemInfo.DateGiftWasGiven.split('T');
   strdoj[0].replace("-","/");
   let mainstr=strdoj[0].replace("-","/");
   //let strToDate = new Date(mainstr);
   this.setState({dtgiftgiven:mainstr})

    //endregion

    //region4

    this.setState({businesspurposegiftgiven:ItemInfo.BusinessPurposeofGift});

    this.setState({addcommentsgiven:ItemInfo.AdditionalCommentsforGift});
    
    this.setState({AttachmentFiles:ItemInfo.AttachmentFiles})


    if(ItemInfo.Status=='Approved')
    {
    
    this.setState({RiskReviewGiven:ItemInfo.RiskReviewPolicy});
    this.setState({SignoffGiven:ItemInfo.SignOff.EMail});
    this.setState({RiskReviewerGiven:ItemInfo.RiskReviewer.EMail});

    }



    //endregion
      

    }

   
  }


public  getParam( name:any )
{
 name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
 var regexS = "[\\?&]"+name+"=([^&#]*)";
 var regex = new RegExp( regexS );
 var results = regex.exec(window.location.href);
 if( results == null )
 return "";
 else
 return results[1];
}

public  getParam1( name:any )
{
 name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
 var regexS = "[\\?&]"+name+"=([^&#]*)";
 var regex = new RegExp( regexS );
 var results = regex.exec(window.location.href);
 if( results == null )
 return "";
 else
 return results[1];
}









  public render(): React.ReactElement<IGiftRegistrationDetailsProps> {
  
    return (

  <Stack tokens={stackTokens} styles={stackStyles} >


{RequestType=='Received' &&
<Stack>
<Stack>
   
 <Stack horizontal tokens={stackTokens1}>

<StackItem className={styles.coststylediv1} >

<b>{this.state.GiftRegistryIDRecevied}</b>

<br></br>

<div className={styles.Divsection}>  

<b><label className={styles.HeadLable}>Gift Registry</label></b><br></br><br></br>

</div>

<div className={styles.testcssborder}>  

<div className={styles.Divsection}>  

<b><label className={styles.HeadLable}>Gift Register Identification</label></b><br></br><br></br>

</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Your Name</label></b><br/><br/>
{this.state.YourNameRecieved}
</div>
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Your Title</label></b><br/><br/>  
{this.state.YourTitleRecieved}
</div>
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Property Country</label></b><br/><br/>  
{this.state.CountryReciveved}
</div>

</div>
<br></br><br></br><br></br>

<div className={styles.testcssborder}> 
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Was the Gift / Entertainment Received or Given on Behalf of Capco</label></b><br/><br/>  
Capco Received the Gift/Entertainment
</div>
</div>

</StackItem>
</Stack>

<br></br><br></br>

<div className={styles.Divsection}>

<b><label className={styles.HeadLable}>Recieved Gift / Entertainment for Capco</label></b>

</div>

<br></br><br></br>

<Stack horizontal tokens={stackTokens1}>

<StackItem className={styles.coststylediv} >

<div className={styles.Divsection}>  

<b><label className={styles.HeadLable}>Identify who gave the gift</label></b><br/>  

</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>From Name</label></b><br/><br/>
{this.state.FromNameReceived}
</div>
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Is Giver a PEP (Politically Exposed Person)</label></b><br/><br/>  
{this.state.IsgiverPRPReceived}
</div>
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>From Company (Politically Exposed Person)</label></b><br/><br/>  
{this.state.FromCompanyReceived}
</div>
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>From Title (Politically Exposed Person)</label></b><br/><br/>  
{this.state.FromTitleReceived}
</div>
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>From Address (Politically Exposed Person)</label></b><br/><br/>  
{this.state.FromAddressReceived}
</div>

</StackItem>

<StackItem className={styles.coststylediv} >

<div className={styles.Divsection}>  

<b><label className={styles.HeadLable}>Description of Gift / Entertainment</label></b><br/>  

</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Value of the Gift</label></b><br/><br/>
{this.state.ValueofgiftReceived}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Currency</label></b><br/><br/>
{this.state.CurrencyReceived}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Description</label></b><br/><br/>
{this.state.DescriptionofGiftReceieved}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Receiving Party</label></b><br/><br/>
{this.state.Recevingpart}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Date Gift Was Received</label></b><br/><br/>
{this.state.dtgiftrecieved}
</div>


</StackItem>
<StackItem className={styles.coststylediv} >
<div className={styles.Divsection}>  
<b><label className={styles.HeadLable}>Define Gift / Entertainment</label></b><br/>  
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Business Purpose of Gift</label></b><br/><br/>
{this.state.Businesspurposeofgiftreceived}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Additional Comments</label></b><br/><br/>
{this.state.addcommentsrecived}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Attachments</label></b><br/><br/>
{this.state.AttachmentFiles.length>0 && this.state.AttachmentFiles.map((item:any,index:any) =>( 
    <div><a href={item.ServerRelativeUrl} target="_blank">{item.FileName} </a></div>
   ))}
</div>

</StackItem>
</Stack>
<br></br>

<Stack horizontal tokens={stackTokens1}>

 <StackItem className={styles.coststylediv1} >

<b><label className={styles.HeadLable}>Risk Team Review</label></b>
<br></br><br></br>

<div className={styles.testcssborder}>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Risk Review</label></b><br/><br/>
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Risk Reviewer</label></b><br/><br/>
{this.state.RiskReviewerRecived}

</div>
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Risk Review (Does this meet policy standards)</label></b><br/><br/>  
{this.state.RiskReviewRecived}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}></label></b><br/><br/>  
</div>



</div>

</StackItem>

<br></br><br></br><br></br>


<StackItem className={styles.coststylediv1} >


<br></br><br></br>

<div className={styles.testcssborder}>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Gift/Entertainment</label></b><br/><br/>
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Risk Approver Signature</label></b><br/><br/>
<Checkbox label="(I have reviewed the submitted Gift/Entertainment)" checked={this.state.Mycheckbox}  value={'(I have reviewed the submitted Gift/Entertainment'}/>
</div>
<div className={styles.Divsection}>  
{this.state.SignoffRecived}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Risk Review Additional Comments</label></b><br></br><br></br>
{this.state.ReciverComments}
</div>

</div>

</StackItem>


</Stack>
</Stack>
</Stack>
  
}

{RequestType=='Given' &&
<Stack>
<Stack>
   
<Stack horizontal tokens={stackTokens1}>

<StackItem className={styles.coststylediv1} >

<b>{this.state.GiftRegistryIDGiven}</b>

<div className={styles.Divsection}>  

<b><label className={styles.HeadLable}>Gift Registry</label></b><br></br><br></br>

</div>


<div className={styles.testcssborder}>  

<div className={styles.Divsection}>  

<b><label className={styles.HeadLable}>Gift Register Identification</label></b><br></br><br></br>

</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Your Name</label></b><br/><br/>
{this.state.YourNameGiven}
</div>
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Your Title</label></b><br/><br/>  
{this.state.YourTitleGiven}
</div>
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Property Country</label></b><br/><br/>  
{this.state.GivenCompany}
</div>
</div>
<br></br>

<div className={styles.testcssborder}> 
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Was the Gift / Entertainment Received or Given on Behalf of Capco</label></b><br/><br/>  
Capco Given the Gift/Entertainment
</div>
</div>

</StackItem>
</Stack>



<div className={styles.Divsection}>

<b><label className={styles.HeadLable}>Given Gift / Entertainment for Capco</label></b>

</div>

<Stack horizontal tokens={stackTokens1}>

<StackItem className={styles.coststylediv} >

<div className={styles.Divsection}>  

<b><label className={styles.HeadLable}>Identify who gave the gift</label></b><br/>  

</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Name</label></b><br/><br/>

{this.state.Givename}
</div>
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Gift / Entertainment given to PEP ( Politically Exposed Person ) </label></b><br/><br/>  
{this.state.ValueofGiftgiven}
</div>
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Company</label></b><br/><br/>  
{this.state.GivenCompany}
</div>
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Title (Politically Exposed Person)</label></b><br/><br/>  
{this.state.GivenTitle}
</div>
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}> Address</label></b><br/><br/>  
{this.state.GivenAddress}
</div>

</StackItem>

<StackItem className={styles.coststylediv} >

<div className={styles.Divsection}>  

<b><label className={styles.HeadLable}>Description of Gift / Entertainment</label></b><br/>  

</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Value of the Gift</label></b><br/><br/>
{this.state.ValueofGiftgiven}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Currency</label></b><br/><br/>
{this.state.MyCurrencyvalueGiven}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Description</label></b><br/><br/>
{this.state.descofgitgiven}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Giving Party</label></b><br/><br/>
{this.state.Givingparty}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Date Gift Was Given</label></b><br/><br/>
{this.state.dtgiftgiven}
</div>


</StackItem>
<StackItem className={styles.coststylediv} >
<div className={styles.Divsection}>  
<b><label className={styles.HeadLable}>Define Gift / Entertainment</label></b><br/>  
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Business Purpose of Gift</label></b><br/><br/>
{this.state.businesspurposegiftgiven}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Additional Comments</label></b><br/><br/>
{this.state.addcommentsgiven}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Attachments</label></b><br/><br/>
{this.state.AttachmentFiles.length>0 && this.state.AttachmentFiles.map((item:any,index:any) =>( 
    <div><a href={item.ServerRelativeUrl} target="_blank">{item.FileName} </a></div>
   ))}
</div>


</StackItem>
</Stack>

<br></br><br></br>

<Stack horizontal tokens={stackTokens1}>

<StackItem className={styles.coststylediv1} >

<b><label className={styles.HeadLable}>Risk Team Review</label></b>
<br></br><br></br>

<div className={styles.testcssborder}>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Risk Review</label></b><br/><br/>
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Risk Reviewer</label></b><br/><br/>
{this.state.RiskReviewerGiven}

</div>
<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Risk Review (Does this meet policy standards)</label></b><br/><br/>  
{this.state.RiskReviewGiven}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}></label></b><br/><br/>  
</div>





</div>

</StackItem>

<br></br><br></br><br></br>

<StackItem className={styles.coststylediv1} >

<br></br><br></br>

<div className={styles.testcssborder}>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Gift/Entertainment</label></b><br/><br/>
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Risk Approver Signature</label></b><br/><br/>
<Checkbox label="(I have reviewed the submitted Gift/Entertainment)" checked={this.state.Mycheckbox}  value={'(I have reviewed the submitted Gift/Entertainment'}/>
</div>
<div className={styles.Divsection}>  
{this.state.SignoffGiven}
</div>

<div className={styles.Divsection}>  
<b><label className={styles.labelsFonts}>Risk Review Additional Comments</label></b><br></br><br></br>
{this.state.ReciverComments}
</div>

</div>

</StackItem>

</Stack>
</Stack>
</Stack>
  
}

</Stack>
      
    );
  }
}
