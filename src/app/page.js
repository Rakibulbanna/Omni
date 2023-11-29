
'use client';
import { Box, Card, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Grid, IconButton, ListItemIcon, Stack, TextField, ThemeProvider, Typography, createTheme, styled } from '@mui/material';
import FAQSection from '../../components/FAQSection';
import LandingPageButton from '../../components/LandingPageButton';
import { useEffect, useState } from 'react';
import { AutoCompleteWrapper, TextAreaWrapper, TextFieldWrapper } from '../../components/AutoCompleteWrapper';
import CloseIcon from '@mui/icons-material/Close';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
export default function Home() {
  const [groupList, setGroupList] = useState([
    {
      label: 'a', value: 'a',
      sub: [
        {
          label: 'sa1', value: 'sa1',
          subsub: [
            { label: 'sa1 subA1', value: 'sa1 subA1', description: 'rgerthbetrh' },
            { label: 'sa1 subA2', value: 'sa1 subA2', description: 'rgerthbetrh' }
          ]
        },
        {
          label: 'sa2', value: 'sa2',
          subsub: [
            { label: 'sa2 subA1', value: 'sa2 subA1', description: 'rgerthbetrh' },
            { label: 'sa2 subA2', value: 'sa2 subA2', description: 'rgerthbetrh' }
          ]
        },
      ]
    },
    {
      label: 'b', value: 'b',
      sub: [
        {
          label: 'sb1', value: 'sb1',
          subsub: [
            { label: 'subB1', value: 'subB1', description: 'rgerthbetrh' },
            { label: 'subB2', value: 'subB2', description: 'aaaaaaaaa' }
          ]
        },
        {
          label: 'sb2', value: 'sb2',
          subsub: [
            { label: 'sb2 subB1', value: 'sb2 subB1', description: 'efgwrg' },
            { label: 'sb2 subB2', value: 'sb2 subB2', description: 'egergertgetbnh' }
          ]
        },
      ]
    },

  ]);

  const [open, setOpen] = useState(null)

  const [subGroup, setSubGroup] = useState([])
  const [subSubGroup, setsubSubGroup] = useState([])

  const [selectedGroup, setSelectedGroup] = useState(null)
  const [selectedSubGroup, setSelectedSubGroup] = useState(null)
  const [selectedSubSubGroup, setSelectedSubSubGroup] = useState(null)

  const updatingGrouplist = (e) => {
    return new Promise((resole, reject) => {
      try {
        if (open == 'sub') {
          setGroupList(prev => {
            const findGroup = prev.find(i => i.value === selectedGroup.value)
            findGroup.sub.push({
              label: e.target.groupName.value,
              value: e.target.groupName.value,
              description: e.target.description.value,
              subsub: []
            })
            return prev
          })
        }
        else if (open == 'subsub') {
          setGroupList(prev => {
            const findGroup = prev.find(i => i.value === selectedGroup.value).sub.find(i => i.value == selectedSubGroup.value)
            findGroup.subsub.push({
              label: e.target.groupName.value,
              value: e.target.groupName.value,
              description: e.target.description.value
            })
            return prev
          })
        }
        resole('ok')
      } catch (err) {
        console.log(err);
        reject(err)
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updatingGrouplist(e)
    handleClose()

  }

  const handleClose = () => setOpen(false)

  const handleAllClear = () => {
    setSelectedGroup(null)
    setSelectedSubGroup(null)
    setSelectedSubSubGroup(null)
  }
  return (
    <>

      <Grid sx={{
        display: 'grid',
        spacing: 2,
        gap: 2,
        p: 2,

        width: '100%'
      }} >

        <Box display={'flex'} flexDirection={'column'} gap={1.5} border={'1px solid lightGray'} p={2}>
          <Typography>Nature of Group<span style={{ color: "red", paddingLeft: '5px' }} >*</span></Typography>
          <Grid maxHeight={'100%'} display={'grid'} gridTemplateColumns={'0.1fr 5fr'} gap={1}>
            <ListItemIcon
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid lightGray',
                borderRadius: '4px',
                height: 40,
              }}
            >
              <FormatListBulletedIcon />
            </ListItemIcon>

            <AutoCompleteWrapper
              required
              options={groupList}
              value={selectedGroup}
              handleChange={(e, v) => {
                if (v) {
                  setSelectedGroup({ label: v.label, value: v.value });
                  setSubGroup(v.sub)
                } else {
                  setSelectedGroup(null);
                  setSubGroup([])
                }
                setSelectedSubGroup(null)
                setSelectedSubSubGroup(null)
              }}
            />


          </Grid>
        </Box>
        {
          selectedGroup && <Box display={'flex'} flexDirection={'column'} gap={1.5} border={'1px solid lightGray'} p={2}>
            <Typography>Sub Group<span style={{ color: "red", paddingLeft: '5px' }} >*</span></Typography>
            <Grid maxHeight={'100%'} display={'grid'} gridTemplateColumns={'0.1fr 5fr 0.1fr'} gap={1}>
              <ListItemIcon
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid lightGray',
                  borderRadius: '4px',
                  height: 40
                }}
              >
                <FormatListBulletedIcon />
              </ListItemIcon>

              <AutoCompleteWrapper
                required
                options={subGroup}
                value={selectedSubGroup}
                handleChange={(e, v) => {
                  if (v) {
                    setSelectedSubGroup({ label: v.label, value: v.value })
                    setsubSubGroup(v.subsub)
                  } else {
                    setSelectedSubGroup(null)
                    setsubSubGroup([])
                  }
                  setSelectedSubSubGroup(null)
                }}
              />
              <ListItemIcon
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid lightGray',
                  borderRadius: '4px',
                  height: 40,
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setOpen('sub')
                }}
              >
                <AddIcon />
              </ListItemIcon>
            </Grid>
          </Box>
        }
        {
          selectedGroup && selectedSubGroup && <Box display={'flex'} flexDirection={'column'} gap={1.5} border={'1px solid lightGray'} p={2}>
            <Typography>Sub Group<span style={{ color: "red", paddingLeft: '5px' }} >*</span></Typography>
            <Grid maxHeight={'100%'} display={'grid'} gridTemplateColumns={'0.1fr 5fr 0.1fr'} gap={1}>
              <ListItemIcon
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid lightGray',
                  borderRadius: '4px',
                  height: 40
                }}
              >
                <FormatListBulletedIcon />
              </ListItemIcon>

              <AutoCompleteWrapper
                required
                options={subSubGroup}
                value={selectedSubSubGroup}
                handleChange={(e, v) => setSelectedSubSubGroup(v)}
              />
              <ListItemIcon
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid lightGray',
                  borderRadius: '4px',
                  height: 40,
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setOpen('subsub')
                }}
              >
                <AddIcon />
              </ListItemIcon>
            </Grid>
          </Box>
        }


        <DialogActions

        >
          <Button onClick={handleAllClear}
            variant="contained"
            style={{ backgroundColor: '#ffc107' }}
          >
            Clear
          </Button>
        </DialogActions>


      </Grid >
      <BootstrapDialog
        onClose={handleClose}
        open={open ? true : false}
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }} >
          Modal title
        </DialogTitle>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <form onSubmit={handleSubmit}>
            <DialogContent

              sx={{
                p: 3
              }}
            >
              <Grid container gap={2}>

                <Box display={'flex'} minWidth={'100%'} flexDirection={'column'} gap={1.5}>
                  <Typography>Nature of Group<span style={{ color: "red", paddingLeft: '5px' }} >*</span></Typography>
                  <Grid item maxHeight={'100%'} display={'grid'} gridTemplateColumns={'8% 92%'} gap={2}>
                    <ListItemIcon
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid lightGray',
                        borderRadius: '4px',

                      }}
                    >
                      <EditNoteIcon />
                    </ListItemIcon>

                    <TextField
                      size='small'
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: 0.6,
                        },

                      }}
                      variant="outlined"
                      fullWidth
                      name='groupName'
                      placeholder={`Group Name here...`}
                      required
                    />
                  </Grid>
                </Box>

                <Box display={'flex'} minWidth={'100%'} flexDirection={'column'} gap={1.5}>
                  <Typography>Description<span style={{ color: "red", paddingLeft: '5px' }} >*</span></Typography>
                  <Grid item maxHeight={'100%'} display={'grid'} gridTemplateColumns={'8% 92%'} gap={2}>
                    <ListItemIcon
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        border: '1px solid lightGray',
                        borderRadius: '4px',
                      }}
                    >
                      <EditNoteIcon />
                    </ListItemIcon>
                    <TextField
                      variant="outlined"
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: 0.6,
                        },

                      }}
                      multiline
                      fullWidth
                      name='description'
                      placeholder={`Group description here...`}
                      required
                      rows={3}
                      maxRows={Infinity}
                    />

                  </Grid>
                </Box>

              </Grid>
            </DialogContent>
            <DialogActions
              sx={{
                p: 3
              }}
            >
              <Button color="secondary" onClick={handleClose}
                variant="contained"
                style={{ backgroundColor: 'grey' }}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: '#1769aa' }}
              >
                Create
              </Button>
            </DialogActions>
          </form>
        </DialogContent>

      </BootstrapDialog>
    </>
  )
}