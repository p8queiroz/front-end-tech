import React from 'react';
// import { Grid, Typography } from 'components/MaterialUIBase';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Skeleton from '@material-ui/lab/Skeleton';
// import useStyles from './styles';
// import { Modal, TextField } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
// import { IconButton } from '@material-ui/core';
// import CreateIcon from '@material-ui/icons/Create';
// import { UploadButton } from 'components/UploadButton';
// import useCustomerDataLoader from 'hooks/useCustomerDataLoader';
// import { useCustomerInfoMutation } from 'hooks/useCustomerInfoMutation';
// import Spinner from '@material-ui/core/CircularProgress';
// import useCustomerRoadmapActivities from 'hooks/useCustomerRoadmapActivities';

// type CompanyInfoWidgetProps = {
//   maxHeight?: number | string;
// };

// const CompanyInfoWidgetLoader: React.FC<CompanyInfoWidgetProps> = ({ maxHeight }) => {
//   const classes = useStyles({ maxHeight });
//   return (
//     <Grid
//       container
//       item
//       alignItems="center"
//       key={`company-info-loader`}
//       data-testid="company-loader-skeleton"
//       className={classes.card}
//       style={{ backgroundColor: 'white' }}
//     >
//       <Grid container alignItems="center" justifyContent="center" item xs={4}>
//         <Skeleton variant="circle" style={{ backgroundColor: 'lightgray', width: 150, height: 150 }} />
//       </Grid>
//       <Grid container direction="column" alignItems="flex-start" justifyContent="flex-start" item xs={8}>
//         <Skeleton variant="text" style={{ backgroundColor: 'lightgray', width: 300, height: 40 }} />
//         <Skeleton variant="text" style={{ backgroundColor: 'lightgray', width: 250, height: 20 }} />
//         <Skeleton variant="text" style={{ backgroundColor: 'lightgray', width: 150, height: 20 }} />
//         <Grid container item xs={12}>
//           <Skeleton
//             variant="rect"
//             style={{ backgroundColor: 'lightgray', width: 100, height: 100, marginTop: 20 }}
//           />
//           <Skeleton
//             variant="rect"
//             style={{ backgroundColor: 'lightgray', width: 100, height: 100, marginTop: 20, marginLeft: 20 }}
//           />
//           <Skeleton
//             variant="rect"
//             style={{ backgroundColor: 'lightgray', width: 100, height: 100, marginTop: 20, marginLeft: 20 }}
//           />
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// type ImageUploadErrorProps = {
//   errored: boolean;
//   errorMsg: string;
//   setErrored: (errored: boolean) => void;
// };
// const ImageUploadError: React.FC<ImageUploadErrorProps> = ({ errored, errorMsg, setErrored }) => {
//   return (
//     <Modal
//       open={errored}
//       disableEnforceFocus
//       style={{
//         backgroundColor: 'lightgray',
//         height: 200,
//         width: 400,
//         top: '50%',
//         left: '40%',
//         border: '1px solid black',
//         padding: 10,
//       }}
//     >
//       <Grid container direction="row">
//         <Grid item xs={12} style={{ paddingBottom: 20 }}>
//           <Typography variant="h6" style={{ color: 'white' }}>
//             {errorMsg}
//           </Typography>
//         </Grid>
//         <Grid item xs={12} container justifyContent="center" alignItems="flex-end">
//           <Button
//             variant="contained"
//             color="secondary"
//             aria-label="OK"
//             style={{ width: 100 }}
//             onClick={() => setErrored(false)}
//           >
//             OK
//           </Button>
//         </Grid>
//       </Grid>
//     </Modal>
//   );
// };

// const CompanyInfoWidget: React.FC<CompanyInfoWidgetProps> = ({ maxHeight }) => {
//   const classes = useStyles({ maxHeight });
//   const { isLoading, data } = useCustomerDataLoader();
//   const { updateCustomerInfo, updatingCustomerInfo } = useCustomerInfoMutation();
//   const [isEditMode, setIsEditMode] = React.useState(false);
//   const [logo, setLogo] = React.useState<string>();
//   const [noOfEmployees, setNoOfEmployees] = React.useState(data?.numberOfEmployees);
//   const letter = data?.name ? data.name[0] : 'L';

//   React.useEffect(() => {
//     if (data?.logoSrc && !logo) {
//       setLogo(data?.logoSrc);
//     }
//   }, [data, logo]);

//   const [errored, setErrored] = React.useState(false);
//   const [errorMsg, setErrorMsg] = React.useState('');
//   const { isInitialLoading: isLoadingActivities, data: tasks } = useCustomerRoadmapActivities();

//   const completedActions = React.useMemo(() => {
//     const completeActions = tasks.filter((t) => t.parentActivityId === null && t.progress === '100');
//     return completeActions.length;
//   }, [tasks]);

//   const saveChanges = () => {
//     setIsEditMode(false);
//     updateCustomerInfo({
//       variables: {
//         body: {
//           customer: {
//             numberOfEmployees: Number(noOfEmployees || data?.numberOfEmployees),
//             logoSrc: logo,
//             state: data?.state,
//             city: data?.city,
//             name: data?.name,
//           },
//         },
//       },
//     });
//   };

//   const errorImage = (msg: string) => {
//     setErrorMsg(msg);
//     setErrored(true);
//   };

//   if (isLoading) {
//     // using Typography to keep space for when component loads
//     return <CompanyInfoWidgetLoader maxHeight={maxHeight} />;
//   }

//   return (
//     <Card elevation={2} className={classes.card} data-testid="company-info-widget">
//       <CardContent className={classes.cardContent}>
//         <Grid
//           container
//           justifyContent="center"
//           alignItems="flex-start"
//           direction="row"
//           className={classes.cardContent}
//         >
//           <ImageUploadError errored={errored} errorMsg={errorMsg} setErrored={setErrored} />
//           <Grid container alignItems="center" item xs={4} className={classes.logoContainer}>
//             <Grid>
//               <Avatar alt="logo" className={classes.logo}>
//                 <>
//                   {logo && <img src={logo} alt="logo" className={classes.logoImg} />}
//                   {!logo && <span>{letter}</span>}
//                 </>
//               </Avatar>
//             </Grid>
//             {isEditMode && (
//               <Grid style={{ marginTop: 10 }}>
//                 <UploadButton uploaded={setLogo} error={errorImage} />
//               </Grid>
//             )}
//           </Grid>
//           <Grid item container direction="column" xs={8}>
//             <Grid container item xs={12}>
//               <Grid item xs={9}>
//                 <Typography variant="h4" className={classes.companyName}>
//                   {data?.name || ''}
//                 </Typography>
//               </Grid>
//               <Grid container item xs={3} alignItems="center">
//                 <IconButton
//                   type="button"
//                   className={classes.button}
//                   style={{ color: appColors.aqua }}
//                   onClick={(e) => setIsEditMode(!isEditMode)}
//                 >
//                   EDIT INFO
//                   {!updatingCustomerInfo && <CreateIcon style={{ fontSize: 20, paddingLeft: 5 }} />}
//                   {updatingCustomerInfo && <Spinner size={20} color="secondary" />}
//                 </IconButton>
//               </Grid>
//             </Grid>
//             <Grid container item xs={12} alignItems="center">
//               <Grid container item xs={12} alignItems="center">
//                 <Typography variant="h6" className={classes.address1}>
//                   {data?.customerType?.customerType}
//                 </Typography>
//               </Grid>
//               <Grid container item xs={12} alignItems="center">
//                 <Typography variant="h6" className={classes.address2}>
//                   {data && data.city ? data.city + ', ' : ''}
//                   {`${data?.state}`}
//                 </Typography>
//               </Grid>
//             </Grid>
//             {!isEditMode && (
//               <Grid container item direction="row" xs={12} style={{ marginTop: 35 }}>
//                 <Grid item xs={3}>
//                   <Grid item xs={12}>
//                     <Typography variant="h4" className={classes.companyAttribs}>
//                       {data?.numberOfEmployees || data?.customerSize?.customerSize || 1}
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={2}>
//                     <Typography variant="subtitle1" className={classes.companyAttribsTitle}>
//                       company size
//                     </Typography>
//                   </Grid>
//                 </Grid>
//                 <Grid style={{ backgroundColor: '#000000', width: 1, marginRight: 15 }} />
//                 <Grid item xs={4}>
//                   <Grid item xs={12}>
//                     <Typography variant="h4" className={classes.companyAttribs}>
//                       {data?.locationCount || 1}
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={10}>
//                     <Typography variant="subtitle2" className={classes.companyAttribsTitle}>
//                       locations managed
//                     </Typography>
//                   </Grid>
//                 </Grid>
//                 <Grid style={{ backgroundColor: '#000000', width: 1, marginRight: 15 }} />
//                 <Grid item xs={3}>
//                   <Grid item xs={12}>
//                     <Typography variant="h4" className={classes.companyAttribs}>
//                       {isLoadingActivities && '-'}
//                       {!isLoadingActivities && completedActions}
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={2}>
//                     <Typography variant="subtitle1" className={classes.companyAttribsTitle}>
//                       completed actions
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             )}
//             {isEditMode && (
//               <Grid container item direction="row" xs={12} style={{ marginTop: 35 }}>
//                 <Grid item xs={12} style={{ marginBottom: 10 }}>
//                   <TextField
//                     helperText="Ability to manage multiple locations in Sustain.Life is coming soon"
//                     placeholder="Locations using Sustain.Life"
//                     id="locations"
//                     type="number"
//                     variant="outlined"
//                     color="secondary"
//                     style={{ width: 350 }}
//                     InputProps={{
//                       inputProps: {
//                         min: 0,
//                       },
//                     }}
//                     disabled
//                   />
//                 </Grid>
//                 <Grid item xs={12} style={{}}>
//                   <TextField
//                     placeholder="Number of employees"
//                     id="noOfEmployees"
//                     type="number"
//                     variant="outlined"
//                     color="secondary"
//                     style={{ width: 350 }}
//                     InputProps={{
//                       inputProps: {
//                         min: 0,
//                       },
//                     }}
//                     onChange={(e) => setNoOfEmployees(+e.target.value)}
//                   />
//                 </Grid>

//                 <Grid container direction="row" item xs={12} style={{ marginTop: 10 }}>
//                   <Grid item xs={4}>
//                     <Button
//                       variant="contained"
//                       color="secondary"
//                       aria-label="Cancel Edit"
//                       style={{ width: 100 }}
//                       onClick={() => setIsEditMode(false)}
//                     >
//                       CANCEL
//                     </Button>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Button
//                       variant="contained"
//                       aria-label="Cancel Edit"
//                       style={{ minWidth: 100, backgroundColor: appColors.lightBlack, color: appColors.white }}
//                       onClick={saveChanges}
//                     >
//                       SAVE
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             )}
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };
// export default CompanyInfoWidget;
