package dreamdiary.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class DiaryEntryDTO implements Serializable {
	
	private static final long serialVersionUID = -7826800714698426348L;
	
	private String id;
	private Date createdDate;
	private String title;
	private String content;
	private List<String> tags;
	private List<String> images;
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public Date getCreatedDate() {
		return createdDate;
	}
	
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	
	public List<String> getTags() {
		return tags;
	}
	
	public void setTags(List<String> tags) {
		this.tags = tags;
	}
	
	public List<String> getImages() {
		return images;
	}
	
	public void setImages(List<String> images) {
		this.images = images;
	}
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}