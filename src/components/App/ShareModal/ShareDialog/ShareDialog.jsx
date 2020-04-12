import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import useBreakpoint from 'hooks/use-breakpoint';
import ShareEditor from 'components/shared/ShareEditor';
import ShareButtons from 'components/shared/ShareButtons';
import IconButton from 'components/shared/IconButton';
import './ShareDialog.scss';

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ShareDialog = (props) => {
  const { open, close, changePayload, sharePayload, copyPayload } = props;
  const isGtSm = useBreakpoint('gt-sm');

  return (
    <Dialog
      fullScreen={!isGtSm}
      fullWidth
      open={open}
      onClose={close}
      TransitionComponent={Transition}
    >
      <div styleName="header">
        <div styleName="header__title-group">
          <h3 styleName="header__title">Share Now</h3>
          <div styleName="header__subtitle">Get the hashtags/posters out!</div>
        </div>
        <div styleName="header__close">
          <IconButton variant="inverted" icon="times" click={close} />
        </div>
      </div>
      <DialogContent>
        <ShareEditor changePayload={changePayload} />
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. Quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing.</p>
      </DialogContent>
      <DialogActions>
        <div styleName="actions">
          <ShareButtons share={sharePayload} copy={copyPayload} />
        </div>
      </DialogActions>
    </Dialog>
  );
};

ShareDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  changePayload: PropTypes.func.isRequired,
  sharePayload: PropTypes.func.isRequired,
  copyPayload: PropTypes.func.isRequired,
};

export default ShareDialog;
