import React from "react";
import { StdTextFieldTwo } from "./../../styled-component/Input";
import { Form } from "./../../styled-component/Layout";
import { Box, InputLabel, Select, FormControl } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { primaryHover } from "../../styled-component/Variable";
import { MuiButton } from "../../styled-component/Button";
import { connect } from "react-redux";
import {
  toggleSearchModal,
  toggleCreateModal,
} from "./../../redux/modal/actions";

const ContentForm = ({
  handleChange,
  form,
  toggleSearchModal,
  toggleCreateModal,
}) => {
  const handleClickSearch = () => {
    toggleCreateModal();
    toggleSearchModal();
  };
  return (
    <Form mb="20px" p="2rem" noValidate autoComplete="off">
      <Box mb={2}>
        <FormControl fullWidth>
          <InputLabel htmlFor="lang">Select Column *</InputLabel>
          <Select
            native
            value={form.lang}
            onChange={handleChange}
            inputProps={{
              name: "lang",
              id: "lang",
            }}
          >
            <option aria-label="None" value="" />
            <option value="1">Korean</option>
            <option value="2">English</option>
          </Select>
        </FormControl>
      </Box>
      <Box mb={2}>
        <StdTextFieldTwo
          name="title"
          onChange={handleChange}
          label="title"
          fullWidth
          sz="1.3rem"
          value={form.title}
        />
      </Box>
      <Box mb={2}>
        <StdTextFieldTwo
          name="cp_name"
          onChange={handleChange}
          label="CP name ( add search ) "
          fullWidth
          sz="1.3rem"
          value={form.cp_name}
        />
        <MuiButton
          onClick={() => handleClickSearch()}
          endIcon={<SearchIcon />}
          variant="contained"
          border={primaryHover}
          bg="#fff"
          sz="1.1rem"
        >
          search
        </MuiButton>
      </Box>
      <Box mb={2}>
        <StdTextFieldTwo
          name="category"
          onChange={handleChange}
          label="Category ( add search fn )"
          fullWidth
          sz="1.3rem"
          value={form.category}
        />
        <MuiButton
          endIcon={<SearchIcon />}
          variant="contained"
          border={primaryHover}
          bg="#fff"
          sz="1.1rem"
        >
          search
        </MuiButton>
      </Box>

      <Box mb={2}>
        <FormControl fullWidth>
          <InputLabel htmlFor="artist_list">Select artist list *</InputLabel>
          <Select
            native
            value={form.artist_list}
            onChange={handleChange}
            inputProps={{
              name: "artist_list",
              id: "artist_list",
            }}
          >
            <option aria-label="None" value="" />
            <option value="1">우주소녀</option>
            <option value="2">빅뱅</option>
            <option value="2">트와이스</option>
            <option value="2">걸스데이</option>
            <option value="2">여자친구</option>
            <option value="2">에이핑크</option>
            <option value="2">블랙핑크</option>
          </Select>
        </FormControl>
      </Box>
      <Box mb={2}>
        <FormControl fullWidth>
          <InputLabel htmlFor="genre_list">Select genre list *</InputLabel>
          <Select
            native
            value={form.genre_list}
            onChange={handleChange}
            inputProps={{
              name: "genre_list",
              id: "genre_list",
            }}
          >
            <option aria-label="None" value="" />
            <option value="1">엔터테인먼트</option>
            <option value="2">호러</option>
            <option value="2">슈팅</option>
            <option value="2">스포츠</option>
            <option value="2">교육</option>
            <option value="2">여행</option>
            <option value="2">자연</option>
          </Select>
        </FormControl>
      </Box>

      <Box mb={2}>
        <StdTextFieldTwo
          name="usageyn"
          onChange={handleChange}
          label="Usageyn"
          fullWidth
          sz="1.3rem"
          value={form.usageyn}
        />
      </Box>
      <Box mb={2}>
        <StdTextFieldTwo
          name="story"
          onChange={handleChange}
          label="story"
          fullWidth
          sz="1.3rem"
          value={form.story}
        />
      </Box>
      <Box mb={2}>
        <StdTextFieldTwo
          name="episode"
          onChange={handleChange}
          label="episode"
          fullWidth
          sz="1.3rem"
          value={form.episode}
        />
      </Box>
      <Box mb={2}>
        <StdTextFieldTwo
          name="priority"
          onChange={handleChange}
          label="priority (num)"
          fullWidth
          sz="1.3rem"
          value={form.priority}
        />
      </Box>
    </Form>
  );
};

export default connect(null, { toggleSearchModal, toggleCreateModal })(
  ContentForm
);
