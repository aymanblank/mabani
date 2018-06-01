import Tender from './models/Tender';
import User from './models/User';
import Project from './models/Project';

const tempUser = () => {
  const user = new User({
    id: '10',
    username: 'ayman',
    password: '123456',
  });
  return user;
};

const tempTenders = () => {
  const tenders = [];
  const tender1 = new Tender({
    id: '1',
    number: 'N123',
    selected: false,
    status: 'in progress',
    details: 'Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ...',
    owner: 'Mr. Ayman Abu Khalifa',
    project_type: 'Villa',
    consaltant: 'Al Sahel Engineering',
    received: '01/05/2018',
    deadline: '31/05/2018',
    bidding_bound: '10,000',
    performance_bound: '10%',
    location: 'Jordan - Amman - Al jandaweel',
    attachments: [{
      title: 'Attachment 1'
    }],
    notes: [],
    approved: true,
    declined: false,
  });
  tenders.push(tender1);

  const tender2 = new Tender({
    id: '2',
    number: 'N123',
    selected: false,
    status: 'in progress',
    details: 'Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ...',
    owner: 'Mr. Ayman Abu Khalifa',
    project_type: 'Villa',
    consaltant: 'Al Sahel Engineering',
    received: '01/05/2018',
    deadline: '31/05/2018',
    bidding_bound: '10,000',
    performance_bound: '10%',
    location: 'Jordan - Amman - Al jandaweel',
    attachments: [],
    notes: [{
      label: 'GM',
      details: 'Can the admin update a copy of the invite? Finance can you advice.'
    }],
    approved: false,
    declined: false,
    items: [{
      details: 'fasdf adsfda sfsdaf sadf asdf dsaf sda fdsa f asdf adsf asd f asdf dsa',
      quantity: 5,
      cost: 10.5,
      pricing: 145.67
    },
    {
      details: 'fasdfa dsfdas fsdaf sadf asdf dsaf sda fdsa f asdf adsf asd f asdf dsa',
      quantity: 5,
      cost: 10.5,
      pricing: 145.67
    },
    {
      details: 'fasdfa dsfdas fsdaf sadf asdf dsaf sda fdsa f asdf adsf asd f asdf dsa',
      quantity: 5,
      cost: 10.5,
      pricing: 145.67
    },
    {
      details: 'fasdfa dsfdas fsdaf sadf asdf dsaf sda fdsa f asdf adsf asd f asdf dsa',
      quantity: 5,
      cost: 10.5,
      pricing: 145.67
    }],
    itemsTotal: 'asfd134.44',
    itemsPricing: 5432.25333,
  });
  tenders.push(tender2);

  const tender3 = new Tender({
    id: '3',
    number: 'N123',
    selected: false,
    status: 'in progress',
    details: 'Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ...',
    owner: 'Mr. Ayman Abu Khalifa',
    project_type: 'Villa',
    consaltant: 'Al Sahel Engineering',
    received: '01/05/2018',
    deadline: '31/05/2018',
    bidding_bound: '10,000',
    performance_bound: '10%',
    location: 'Jordan - Amman - Al jandaweel',
    attachments: [{
      title: 'Attachment 1'
    }],
    notes: [{
      label: 'GM',
      details: 'Can the admin update a copy of the invite? Finance can you advice.'
    },
    {
      label: 'FM',
      details: 'Yes finance can provide the bidding bond, however, the performance bond will be diffecult.'
    }],
    approved: false,
    declined: false,
  });
  tenders.push(tender3);

  return tenders;
}

const tempProjects = () => {
  const projects = [];
  const project1 = new Project({
    id: '1',
    number: 'N123',
    selected: false,
    status: 'in progress',
    details: 'Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ... Some fake fake details ...',
    demarcations:[
      {
        description: 'Submit site manager ID & the contract with the project owner to munacipility with application through the PRO.',
        available: true,
      },
      {
        description: 'Update system with the result of the visit of the land Surveryer.',
        available: false,
      },
    ],
    constructionCertifications: [
      {
        description: 'Install Site signboard',
        available: false,
      },
      {
        description: 'Install Safty signboard',
        available: false,
      },
    ],
    temporaryWAndELines: [
      {
        description: 'LDN',
        available: false,
      },
      {
        description: 'WDN',
        available: true,
      }
    ],
    notes: [{
      label: 'PD',
      details: 'Dear General Manager,\nthis is to report to you that we have a delay in issuing the CC.'
    },
    {
      label: 'GM',
      details: "What's your input on the matter site manager?"
    }],
  });
  projects.push(project1);

  return projects;
}

const tempAreaManagers = () => {
  const areaManagers = [];
  areaManagers.push({
    label: 'Ayman Salah',
    id: '1'
  });
  areaManagers.push({
    label: 'Ahmad Omari',
    id: '2'
  });

  return areaManagers;
}

const initialStore = {
  user: tempUser(),
  tenders: tempTenders(),
  projects: tempProjects(),
  areaManagers: tempAreaManagers(),
}
export default initialStore;