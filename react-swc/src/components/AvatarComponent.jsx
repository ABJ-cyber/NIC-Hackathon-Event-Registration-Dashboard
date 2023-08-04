import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function AvatarComponent({ alt, src, name, subtitle }) {
  return (
    <div className="avatar-container">
      <Avatar alt={name} src={src} className="avatar-image" sx={{ width: 270, height: 270 }} />
      <div className="avatar-text">
        <Typography variant="h6" align="center" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="subtitle2" align="center">
          {subtitle}
        </Typography>
      </div>
    </div>
  );
}

export default AvatarComponent;
