import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import green from '@material-ui/core/colors/green'

import SearchArea from '../components/SearchArea'

import { FixedSizeList } from 'react-window'

import AssessmentIcon from '@material-ui/icons/Assessment'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import SdCardIcon from '@material-ui/icons/SdCard'

import GetStarted from '../pages/getstarted'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	searchArea: {
		marginLeft: 50,
	},
	userAccountArea: {
		marginLeft: 700,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	getStarted: {
		marginTop: 50,
	},
}))

const menuItems = [
	{ displayName: 'Get Started', value: 'getStarted' },
	{ displayName: 'Templates', value: 'templates' },
	{ displayName: 'Data Requirements', value: 'dataReq' },
	{ displayName: 'Metrics', value: 'metrics' },
	{ displayName: 'Upload your Content', value: 'uploadNLPData' },
]

export default function Header() {
	const classes = useStyles()
	const theme = useTheme()
	const [open, setOpen] = React.useState(false)
	const [component, setComponent] = React.useState('getstarted')

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<div className={classes.root}>
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Proven Solution NLP Engine
					</Typography>
					<div className={classes.searchArea}>
						<SearchArea />
					</div>
					<div className={classes.userAccountArea}>
						<AccountCircleIcon fontSize="large" />
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</div>
				<Divider />

				{renderMenu}
			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{component === 'getstarted' ? (
					<GetStarted />
				) : component === 'templates' ? (
					<Templates />
				) : component === 'datareq' ? (
					<DataRequirements />
				) : (
					<Metrics />
				)}
			</main>
		</div>
	)

	const renderMenu = (props) => {
		return (
			<>
				<List>
					<ListItem
						button
						key="Get Started"
						onClick={() => setComponent('getstarted')}
					>
						<ListItemIcon>
							<PlayCircleFilledIcon color="secondary" add_circle />
						</ListItemIcon>

						<ListItemText primary="Get Started" />
					</ListItem>
					<ListItem
						button
						key="Templates"
						onClick={() => setComponent('templates')}
					>
						<ListItemIcon>
							<InsertDriveFileIcon color="secondary" add_circle />
						</ListItemIcon>

						<ListItemText primary="Templates" />
					</ListItem>
					<ListItem
						button
						key="Data Needs"
						onClick={() => setComponent('datareq')}
					>
						<ListItemIcon>
							<SdCardIcon color="secondary" add_circle />
						</ListItemIcon>

						<ListItemText primary="Data Requirements" />
					</ListItem>
					<ListItem
						button
						key="Metrics"
						onClick={() => setComponent('metrics')}
					>
						<ListItemIcon>
							<AssessmentIcon color="secondary" add_circle />
						</ListItemIcon>

						<ListItemText primary="Metrics" />
					</ListItem>
				</List>
			</>
		)
	
}
