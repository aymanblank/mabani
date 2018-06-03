import assets from '../../../utils/assets';
import routes from '../Router/routes';

const blocks = {
  left: [
    { icon: assets.TENDERS, label: 'tenders', page: routes.TENDERS, width: 30, height: 30 },
    { icon: assets.TOOLS_EQUIPMENTS, label: 'tools_and_equipments', width: 50, height: 30 },
    { icon: assets.MANPOWER, label: 'man_power', width: 45, height: 30 },
    { icon: assets.PHOTOS, label: 'photos', width: 40, height: 30 },
    { icon: assets.VARIATIONS, label: 'variations', width: 30, height: 30 },
  ],
  right: [
    { icon: assets.PROJECTS, label: 'projects', page: routes.PROJECTS, width: 30, height: 30 },
    { icon: assets.MATERIAL_REQUEST, label: 'material_request', width: 30, height: 30 },
    { icon: assets.SUBCONTRACTOR, label: 'subcontractor', page: routes.SUBCONTRACTORS, width: 30, height: 30 },
    { icon: assets.REPORTS, label: 'reports', width: 20, height: 30 },
    { icon: assets.HANDOVER, label: 'handover', width: 30, height: 30 },
  ]
};

export default blocks;