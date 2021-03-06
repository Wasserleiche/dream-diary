package dreamdiary.dto;

import java.io.Serializable;
import java.util.List;

public class DiaryEntrySearchResponse implements Serializable {
	
	private static final long serialVersionUID = 7171649424624237707L;
	
	private List<DiaryEntryListResult> entries;
	private long totalElements;
	private long pageCount;
	private int page;
	
	public List<DiaryEntryListResult> getEntries() {
		return entries;
	}
	
	public void setEntries(List<DiaryEntryListResult> entries) {
		this.entries = entries;
	}
	
	public long getTotalElements() {
		return totalElements;
	}
	
	public void setTotalElements(long totalElements) {
		this.totalElements = totalElements;
	}
	
	public long getPageCount() {
		return pageCount;
	}
	
	public void setPageCount(long pageCount) {
		this.pageCount = pageCount;
	}
	
	public int getPage() {
		return page;
	}
	
	public void setPage(int page) {
		this.page = page;
	}
}